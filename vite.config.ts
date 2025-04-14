import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src'],
      exclude: [
        'node_modules',
        'dist',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.stories.ts',
        '**/*.stories.tsx',
      ],
    }),
  ],
  build: {
    // Library Mode configuration
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Your library's main entry point
      name: 'AtomicFlow', // Global variable name (for UMD builds)
      formats: ['es', 'umd'], // Output formats (ES Module, Universal Module Definition)
      fileName: (format) => `atomicflow.${format}.js`,
    },
    rollupOptions: {
      // Ensure React and ReactDOM aren't bundled into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true, // Generate source maps for debugging
    emptyOutDir: true, // Clean the output directory before building
    cssCodeSplit: true,
  },
  // Optional: Alias for easier imports if needed
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, './src'),
  //   },
  // },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
