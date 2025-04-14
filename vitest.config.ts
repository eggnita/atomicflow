// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Use global APIs (describe, it, expect) like Jest
    environment: 'jsdom', // Simulate DOM environment
    setupFiles: ['./src/setupTests.ts'],
    environmentOptions: {
      jsdom: {
        resources: 'usable',
        runScripts: 'dangerously',
      },
    },
    css: false, // Disable CSS processing in tests if not needed, or configure it
    // Optional: Configure coverage
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html'],
      include: ['src/components/**/*.{ts,tsx}', 'src/hooks/**/*.{ts,tsx}'], // Adjust include paths
      exclude: [
        // Exclude files from coverage
        'src/index.ts',
        'src/**/*.stories.{ts,tsx}',
        'src/**/*.test.{ts,tsx}',
        'src/setupTests.ts',
        'src/vite-env.d.ts',
      ],
    },
  },
});
