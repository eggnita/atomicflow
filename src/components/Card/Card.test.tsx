import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Card } from './Card';

describe('Card Component', () => {
    it('renders correctly with children', () => {
        render(<Card>Card Content</Card>);
        const cardElement = screen.getByText('Card Content');
        expect(cardElement).toBeInTheDocument();
    });

    it('renders with variant prop', () => {
        render(<Card variant="flat">Flat Card</Card>);
        const cardElement = screen.getByText('Flat Card');
        expect(cardElement).toBeInTheDocument();
    });

    it('renders with size prop', () => {
        render(<Card size="large">Large Card</Card>);
        const cardElement = screen.getByText('Large Card');
        expect(cardElement).toBeInTheDocument();
    });

    it('renders with className prop', () => {
        render(<Card className="custom-class">Custom Card</Card>);
        const cardElement = screen.getByText('Custom Card');
        expect(cardElement).toBeInTheDocument();
    });
});