// src/index.ts
import './index.css'; // Include Tailwind styles entry point (important for Storybook/dev)

// Export components
export * from './components/Button/Button';
export * from './components/Heading/H1';
// Export types
export type { ButtonProps } from './components/Button/Button';

// Export other components, hooks, utils, etc.
// export * from './components/Card/Card';
// export * from './hooks/useSomething';
