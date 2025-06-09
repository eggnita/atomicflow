// src/index.ts
import './styles/index.css'; // Include Tailwind styles entry point (important for Storybook/dev)

// Export components
export * from './components/Button/Button';
export * from './components/Heading/H1';
export * from './components/Card/Card';

// Export types
export type { ButtonProps } from './components/Button/Button';
export type { CardProps } from './components/Card/Card';

// Theme configuration types (for end users)
export type { ThemeConfig } from './lib/theme-config';
export { defaultTheme } from './lib/theme-config';

// Utility function for end users to validate their config
export { validateThemeConfig } from './lib/generate-theme';

// Export other components, hooks, utils, etc.
// export * from './components/Card/Card';
// export * from './hooks/useSomething';
