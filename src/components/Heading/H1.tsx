import React, { HTMLAttributes } from 'react';

/**
 * Props for the H1 component.
 * Extends standard HTML Heading attributes.
 */
export interface H1Props extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * What color variant to use
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary' | 'muted';
    /**
     * How large should the heading be?
     * @default 'large'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Heading contents
     */
    children: React.ReactNode;
}

/**
 * Primary heading component for the AtomicFlow design system.
 */
export const H1: React.FC<H1Props> = ({
    variant = 'primary',
    size = 'large',
    children,
    className = '',
    ...props
}) => {
    // Base classes
    const baseStyle = 'font-bold tracking-tight';

    // Variant classes
    const variantStyles = {
        primary: 'text-gray-900',
        secondary: 'text-blue-600',
        muted: 'text-gray-600',
    };

    // Size classes
    const sizeStyles = {
        small: 'text-2xl',
        medium: 'text-3xl',
        large: 'text-4xl',
    };

    // Combine classes
    const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <h1
            className={combinedClassName.trim()}
            {...props}
        >
            {children}
        </h1>
    );
};
