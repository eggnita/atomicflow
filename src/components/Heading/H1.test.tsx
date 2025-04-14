import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { H1 } from './H1';

describe('H1 Component', () => {
    it('renders correctly with children', () => {
        render(<H1>Hello World</H1>);
        const headingElement = screen.getByRole('heading', { name: /hello world/i });
        expect(headingElement).toBeInTheDocument();
    });

    it('applies default primary variant styles', () => {
        render(<H1>Primary Heading</H1>);
        const headingElement = screen.getByRole('heading', { name: /primary heading/i });
        expect(headingElement).toHaveClass('text-gray-900');
        expect(headingElement).toHaveClass('text-4xl');
    });

    it('applies secondary variant styles', () => {
        render(<H1 variant="secondary">Secondary Heading</H1>);
        const headingElement = screen.getByRole('heading', { name: /secondary heading/i });
        expect(headingElement).toHaveClass('text-blue-600');
    });

    it('applies small size styles', () => {
        render(<H1 size="small">Small Heading</H1>);
        const headingElement = screen.getByRole('heading', { name: /small heading/i });
        expect(headingElement).toHaveClass('text-2xl');
    });

    it('applies additional className', () => {
        render(<H1 className="extra-class">With Extra</H1>);
        const headingElement = screen.getByRole('heading', { name: /with extra/i });
        expect(headingElement).toHaveClass('extra-class');
        expect(headingElement).toHaveClass('text-gray-900'); // Should still have base styles
    });
});