import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import { generateThemeCSS, validateThemeConfig } from './generate-theme';
import { defaultTheme, ThemeConfig } from './theme-config';

export function themeConfigPlugin(): Plugin {
  const configFiles = [
    'atomicflow.config.js',
    'atomicflow.config.ts',
    'atomicflow.config.mjs',
    'theme.config.js',
    'theme.config.ts'
  ];
  
  let configPath: string | null = null;
  const themePath = path.resolve('src/styles/theme.css');

  const loadUserConfig = async (): Promise<ThemeConfig> => {
    // Find config file
    for (const file of configFiles) {
      const fullPath = path.resolve(process.cwd(), file);
      if (fs.existsSync(fullPath)) {
        configPath = fullPath;
        break;
      }
    }

    if (!configPath) {
      console.log('📦 No theme config found, using default theme');
      return defaultTheme;
    }

    try {
      // Clear module cache for hot reloading
      if (configPath.endsWith('.js') || configPath.endsWith('.mjs')) {
        delete require.cache[configPath];
      }

      // Dynamic import with cache busting
      const configModule = await import(configPath + '?t=' + Date.now());
      const userConfig = { ...defaultTheme, ...configModule.default };
      
      // Validate configuration
      const errors = validateThemeConfig(userConfig);
      if (errors.length > 0) {
        console.error('❌ Theme config validation errors:');
        errors.forEach(error => console.error(`  - ${error}`));
        console.log('📦 Falling back to default theme');
        return defaultTheme;
      }

      console.log('✅ Theme config loaded from', path.basename(configPath));
      return userConfig;
    } catch (error) {
      console.error('❌ Error loading theme config:', error instanceof Error ? error.message : String(error));
      console.log('📦 Falling back to default theme');
      return defaultTheme;
    }
  };

  const generateTheme = async () => {
    const userConfig = await loadUserConfig();
    const themeCSS = generateThemeCSS(userConfig);
    
    // Ensure directory exists
    const themeDir = path.dirname(themePath);
    if (!fs.existsSync(themeDir)) {
      fs.mkdirSync(themeDir, { recursive: true });
    }
    
    // Write theme.css
    fs.writeFileSync(themePath, themeCSS);
    console.log('🎨 Theme generated successfully!');
  };

  return {
    name: 'atomicflow-theme-config',
    
    // Generate theme on build start
    async buildStart() {
      await generateTheme();
    },

    // Watch config files in dev mode
    configureServer(server) {
      const watchFiles = configFiles.map(f => path.resolve(process.cwd(), f));
      
      // Add config files to watcher
      server.watcher.add(watchFiles);
      
      // Listen for changes
      server.watcher.on('change', async (file) => {
        if (watchFiles.some(f => f === file)) {
          console.log('🔄 Theme config changed, regenerating...');
          await generateTheme();
          
          // Trigger HMR for theme.css
          const themeModule = server.moduleGraph.getModuleById(themePath);
          if (themeModule) {
            server.reloadModule(themeModule);
          }
          
          // Send HMR update to browser
          server.ws.send({
            type: 'full-reload'
          });
        }
      });

      // Also watch for new config files being created
      server.watcher.on('add', async (file) => {
        if (watchFiles.some(f => f === file)) {
          console.log('📝 New theme config detected, regenerating...');
          await generateTheme();
          server.ws.send({ type: 'full-reload' });
        }
      });
    }
  };
}