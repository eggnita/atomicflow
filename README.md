# Atomic Flow

A modern React component library built with React 19, TypeScript, and Tailwind CSS. Atomic Flow provides a collection of reusable, accessible, and customizable UI components following atomic design principles.

## Features

- 🚀 Built with React 19 and TypeScript
- 🎨 Styled with Tailwind CSS
- 📚 Storybook for component documentation and testing
- 🧪 Comprehensive test coverage with Vitest
- 📦 Tree-shakeable and optimized for production
- 🔍 TypeScript support out of the box
- 🎯 Accessible components following WAI-ARIA guidelines

## Getting Started

### Installation

```bash
npm install atomicflow
# or
yarn add atomicflow
```

### Usage

```tsx
import { Button } from 'atomicflow';

function App() {
  return <Button>Click me</Button>;
}
```

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/eggnita/atomicflow.git
cd atomicflow
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the library
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run coverage` - Generate test coverage
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Testing

The project uses Vitest for testing. You can run tests in different modes:

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run coverage
```

## Storybook

We use Storybook for component documentation and testing. To start Storybook:

```bash
npm run storybook
```

This will open Storybook at `http://localhost:6006`.

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/eggnita/atomicflow/issues) on GitHub.
