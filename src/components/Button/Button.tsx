import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}) => {
  const baseStyle = 'font-bold focus:outline-none focus:ring-2 focus:ring-opacity-50 cursor-pointer';

  // Use CSS variables from the theme
  const variantStyles = {
    primary: 'bg-primary-600 shadow-lg border border-primary-700 shadow-primary-600/30 hover:bg-primary-600 text-white focus:ring-primary-400 focus:border-white focus:shadow-none dark:bg-primary-300 dark:hover:bg-primary-200 dark:focus:ring-primary-500 dark:text-neutral-900',
    secondary: 'bg-neutral-200 hover:bg-neutral-300 text-neutral-900 focus:ring-neutral-400',
    danger: 'bg-error-500 hover:bg-error-600 text-white focus:ring-error-400',
  };

  const sizeStyles = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
  };

  return (
    <button
      type='button'
      className={cn(
        baseStyle,
        variantStyles[variant],
        sizeStyles[size],
        'rounded-[var(--radius-default)]', // Use the theme's default radius
        className
      )}
      style={{
        borderRadius: 'var(--radius-default)' // Fallback for CSS variable
      }}
      {...props}
    >
      {children}
    </button>
  );
};