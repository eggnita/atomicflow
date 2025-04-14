import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { Button } from './Button';

// // Ensure the DOM environment is available
// beforeAll(() => {
//   // This ensures the DOM environment is properly initialized
//   document.body.innerHTML = '';
// });

describe('Button Component', () => {
  it('renders correctly with children', () => {
    render(<Button>Click Me</Button>);
    // screen.debug(); // Uncomment to see the rendered DOM in console
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies default primary variant styles', () => {
    render(<Button>Primary</Button>);
    const buttonElement = screen.getByRole('button', { name: /primary/i });
    expect(buttonElement).toHaveClass('bg-blue-500'); // Check for a specific Tailwind class
    expect(buttonElement).toHaveClass('text-base'); // Check default size class
  });

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const buttonElement = screen.getByRole('button', { name: /secondary/i });
    expect(buttonElement).toHaveClass('bg-gray-500');
  });

  it('applies large size styles', () => {
    render(<Button size="large">Large Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /large button/i });
    expect(buttonElement).toHaveClass('text-lg');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn(); // Create a Vitest mock function
    render(<Button onClick={handleClick}>Clickable</Button>);
    const buttonElement = screen.getByRole('button', { name: /clickable/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when the disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const buttonElement = screen.getByRole('button', { name: /disabled/i });
    expect(buttonElement).toBeDisabled();
  });

  it('applies additional className', () => {
    render(<Button className="extra-class">With Extra</Button>);
    const buttonElement = screen.getByRole('button', { name: /with extra/i });
    expect(buttonElement).toHaveClass('extra-class');
    expect(buttonElement).toHaveClass('bg-blue-500'); // Should still have base styles
  });
});
