import type { StorybookConfig } from '@storybook/react-vite';
import { themeConfigPlugin } from '../src/lib/vite-theme-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins?.push(themeConfigPlugin());
    return config;
  },
};
export default config;
