import { ThemeConfig, isCustomColorScale, ColorScale } from './theme-config';

// Tailwind's official border-radius values
const radiusMap = {
  none: '0',
  xs: '0.125rem',   // 2px
  sm: '0.25rem',    // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  '4xl': '2rem',    // 32px
  full: 'calc(infinity * 1px)'
};

// Helper function to generate color CSS variables
function generateColorVariables(colorName: string, color: string | ColorScale): string {
  if (isCustomColorScale(color)) {
    // Custom color scale
    return Object.entries(color)
      .map(([shade, value]) => `  --color-${colorName}-${shade}: ${value};`)
      .join('\n');
  } else {
    // Tailwind color name
    return [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
      .map(shade => `  --color-${colorName}-${shade}: theme(colors.${color}.${shade});`)
      .join('\n');
  }
}

function generateAppearanceCSS(defaultAppearance: 'light' | 'dark' | 'system'): string {
  switch (defaultAppearance) {
    case 'light':
      return `
/* Force light mode as default */
:root {
  --default-theme: 'light';
}

body:not([data-theme]) {
  @apply bg-white text-neutral-900;
}

body:not([data-theme]) .sb-show-main,
body:not([data-theme]) #storybook-root {
  @apply bg-white;
}`;

    case 'dark':
      return `
/* Force dark mode as default */
:root {
  --default-theme: 'dark';
}

body:not([data-theme]) {
  @apply bg-neutral-900 text-white;
}

body:not([data-theme]) .sb-show-main,
body:not([data-theme]) #storybook-root {
  @apply bg-neutral-900;
}`;

    case 'system':
      return `
/* Use system preference as default */
:root {
  --default-theme: 'system';
}

body:not([data-theme]) {
  @apply bg-white text-neutral-900;
}

body:not([data-theme]) .sb-show-main,
body:not([data-theme]) #storybook-root {
  @apply bg-white;
}

@media (prefers-color-scheme: dark) {
  body:not([data-theme]) {
    @apply bg-neutral-900 text-white;
  }

  body:not([data-theme]) .sb-show-main,
  body:not([data-theme]) #storybook-root {
    @apply bg-neutral-900;
  }
}`;

    default:
      return '';
  }
}

export function generateThemeCSS(config: ThemeConfig): string {
  const {
    primaryColor,
    neutralColor,
    fontHeading,
    fontBody,
    fontMono,
    fontSerif,
    defaultRadius,
    defaultAppearance,
    panelBg,
    successColor = 'green',
    warningColor = 'yellow',
    errorColor = 'red', 
    infoColor = 'cyan'
  } = config;

  // Generate color variables
  const primaryColorCSS = generateColorVariables('primary', primaryColor);
  const neutralColorCSS = generateColorVariables('neutral', neutralColor);
  const successColorCSS = generateColorVariables('success', successColor);
  const warningColorCSS = generateColorVariables('warning', warningColor);
  const errorColorCSS = generateColorVariables('error', errorColor);
  const infoColorCSS = generateColorVariables('info', infoColor);

  // Generate appearance CSS
  const appearanceCSS = generateAppearanceCSS(defaultAppearance);

  return `/* 
 * Auto-generated theme file
 * Do not edit manually - this file is generated from your theme configuration
 * Last generated: ${new Date().toISOString()}
 */

@theme {
  /* Primary Colors */
${primaryColorCSS}

  /* Neutral Colors */
${neutralColorCSS}

  /* Semantic Colors */
${successColorCSS}
${warningColorCSS}  
${errorColorCSS}
${infoColorCSS}

  /* Typography */
  --font-heading: ${fontHeading};
  --font-body: ${fontBody};
  --font-mono: ${fontMono};
  --font-serif: ${fontSerif};

  /* Border Radius */
  --radius-default: ${radiusMap[defaultRadius]};
  --radius-none: 0;
  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;
  --radius-full: calc(infinity * 1px);

  /* Layout */
  --panel-opacity: ${panelBg === 'translucent' ? '0.8' : '1'};
  --panel-backdrop-filter: ${panelBg === 'translucent' ? 'blur(10px)' : 'none'};
}

${appearanceCSS}

/* Utility classes for easy usage */
@layer components {
  .btn-primary {
    @apply bg-primary-500 hover:bg-primary-600 text-white;
    border-radius: var(--radius-default);
  }
  
  .btn-secondary {
    @apply bg-neutral-200 hover:bg-neutral-300 text-neutral-900;
    border-radius: var(--radius-default);
  }
  
  .card {
    @apply bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800;
    border-radius: var(--radius-default);
    opacity: var(--panel-opacity);
    backdrop-filter: var(--panel-backdrop-filter);
  }
  
  .input {
    @apply bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700;
    border-radius: var(--radius-default);
  }
  
  .panel {
    @apply bg-white dark:bg-neutral-900;
    opacity: var(--panel-opacity);
    backdrop-filter: var(--panel-backdrop-filter);
    border-radius: var(--radius-default);
  }
}
`;
}

export function validateThemeConfig(config: Partial<ThemeConfig>): string[] {
  const errors: string[] = [];
  
  const validTailwindColors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
  const validNeutralColors = ['slate', 'gray', 'zinc', 'neutral', 'stone'];
  const requiredShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  // Validate primary color
  if (config.primaryColor) {
    if (typeof config.primaryColor === 'string') {
      if (!validTailwindColors.includes(config.primaryColor)) {
        errors.push(`Invalid primaryColor: ${config.primaryColor}. Must be a valid Tailwind color name or custom color scale.`);
      }
    } else if (isCustomColorScale(config.primaryColor)) {
      // Validate custom color scale
      for (const shade of requiredShades) {
        if (!config.primaryColor[shade as keyof typeof config.primaryColor]) {
          errors.push(`Missing shade ${shade} in custom primaryColor scale.`);
        }
      }
    } else {
      errors.push('Invalid primaryColor format. Must be a string or ColorScale object.');
    }
  }

  // Validate neutral color
  if (config.neutralColor) {
    if (typeof config.neutralColor === 'string') {
      if (!validNeutralColors.includes(config.neutralColor)) {
        errors.push(`Invalid neutralColor: ${config.neutralColor}. Must be one of: ${validNeutralColors.join(', ')}`);
      }
    } else if (isCustomColorScale(config.neutralColor)) {
      // Validate custom color scale
      for (const shade of requiredShades) {
        if (!config.neutralColor[shade as keyof typeof config.neutralColor]) {
          errors.push(`Missing shade ${shade} in custom neutralColor scale.`);
        }
      }
    } else {
      errors.push('Invalid neutralColor format. Must be a string or ColorScale object.');
    }
  }

  if (config.defaultRadius && !['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full'].includes(config.defaultRadius)) {
    errors.push(`Invalid defaultRadius: ${config.defaultRadius}. Must be one of: none, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, full`);
  }
  
  if (config.defaultAppearance && !['light', 'dark'].includes(config.defaultAppearance)) {
    errors.push(`Invalid defaultAppearance: ${config.defaultAppearance}. Must be 'light' or 'dark'`);
  }
  
  if (config.panelBg && !['solid', 'translucent'].includes(config.panelBg)) {
    errors.push(`Invalid panelBg: ${config.panelBg}. Must be 'solid' or 'translucent'`);
  }
  
  return errors;
}