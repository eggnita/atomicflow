import '@testing-library/jest-dom';

// Mock class handling
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => '',
  }),
});
