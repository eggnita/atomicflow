import React, { ButtonHTMLAttributes } from 'react';

/**
 * Props for the Button component.
 * Extends standard HTML Button attributes.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * What background color to use
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'danger';
  /**
   * How large should the button be?
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction.
 * Implements the AtomicFlow design system button.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '', // Allow consumers to pass additional classes
  ...props
}) => {
  // Base classes
  const baseStyle =
    'font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-150 ease-in-out';

  // Variant classes based on design system (using Tailwind)
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white focus:ring-blue-400',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white focus:ring-gray-400',
    danger: 'bg-red-500 hover:bg-red-700 text-white focus:ring-red-400',
  };

  // Size classes
  const sizeStyles = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
  };

  // Combine classes using template literals or a utility like clsx/classnames
  // Install classnames: npm install classnames
  // import cn from 'classnames';
  // const combinedClassName = cn(
  //   baseStyle,
  //   variantStyles[variant],
  //   sizeStyles[size],
  //   className // Consumer-provided classes override defaults if needed
  // );

  // Simple template literal combining (careful with overrides)
  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      type='button'
      className={combinedClassName.trim()} // Trim potential extra spaces
      {...props}
    >
      {children}
    </button>
  );
};
