import React, { HTMLAttributes } from 'react';

/**
 * Props for the Card component.
 * Extends standard HTML Div attributes.
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * What variant to use
     * @default 'default'
     */
    variant?: 'default' | 'flat' | 'elevated';
    /**
     * How large should the card be?
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Card contents
     */
    children: React.ReactNode;
}

/**
 * Card component for the AtomicFlow design system.
 */
export const Card: React.FC<CardProps> = ({
    variant = 'default',
    size = 'medium',
    children,
    className = '',
    ...props
}) => {
    // Base classes
    const baseStyle = 'rounded-lg overflow-hidden border border-gray-200 shadow-sm';

    // Variant classes
    const variantStyles = {
        default: 'bg-white',
        flat: 'bg-white border-0 shadow-none',
        elevated: 'bg-white shadow-md',
    };

    // Size classes
    const sizeStyles = {
        small: 'p-3',
        medium: 'p-4',
        large: 'p-6',
    };

    // Combine classes
    const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <div
            className={combinedClassName.trim()}
            {...props}
        >
            {children}
        </div>
    );
};
