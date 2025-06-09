import { ThemeConfig } from './theme-config';

// Tailwind's official border-radius values
const radiusMap = {
  none: '0',
  xs: '0.125rem',   // 2px
  sm: '0.25rem',    // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  '4xl': '2rem',    // 32px
  full: 'calc(infinity * 1px)'
};

export function generateThemeCSS(config: ThemeConfig): string {
  const {
    primaryColor,
    neutralColor,
    fontHeading,
    fontBody,
    fontMono,
    fontSerif,
    defaultRadius,
    panelBg,
    successColor = 'green',
    warningColor = 'yellow',
    errorColor = 'red',
    infoColor = 'cyan'
  } = config;

  return `/* 
 * Auto-generated theme file
 * Do not edit manually - this file is generated from your theme configuration
 * Last generated: ${new Date().toISOString()}
 */

@theme {
  /* Primary Colors */
  --color-primary-50: theme(colors.${primaryColor}.50);
  --color-primary-100: theme(colors.${primaryColor}.100);
  --color-primary-200: theme(colors.${primaryColor}.200);
  --color-primary-300: theme(colors.${primaryColor}.300);
  --color-primary-400: theme(colors.${primaryColor}.400);
  --color-primary-500: theme(colors.${primaryColor}.500);
  --color-primary-600: theme(colors.${primaryColor}.600);
  --color-primary-700: theme(colors.${primaryColor}.700);
  --color-primary-800: theme(colors.${primaryColor}.800);
  --color-primary-900: theme(colors.${primaryColor}.900);
  --color-primary-950: theme(colors.${primaryColor}.950);

  /* Neutral Colors */
  --color-neutral-50: theme(colors.${neutralColor}.50);
  --color-neutral-100: theme(colors.${neutralColor}.100);
  --color-neutral-200: theme(colors.${neutralColor}.200);
  --color-neutral-300: theme(colors.${neutralColor}.300);
  --color-neutral-400: theme(colors.${neutralColor}.400);
  --color-neutral-500: theme(colors.${neutralColor}.500);
  --color-neutral-600: theme(colors.${neutralColor}.600);
  --color-neutral-700: theme(colors.${neutralColor}.700);
  --color-neutral-800: theme(colors.${neutralColor}.800);
  --color-neutral-900: theme(colors.${neutralColor}.900);
  --color-neutral-950: theme(colors.${neutralColor}.950);

  /* Semantic Colors */
  --color-success-500: theme(colors.${successColor}.500);
  --color-success-600: theme(colors.${successColor}.600);
  --color-warning-500: theme(colors.${warningColor}.500);
  --color-warning-600: theme(colors.${warningColor}.600);
  --color-error-500: theme(colors.${errorColor}.500);
  --color-error-600: theme(colors.${errorColor}.600);
  --color-info-500: theme(colors.${infoColor}.500);
  --color-info-600: theme(colors.${infoColor}.600);

  /* Typography */
  --font-heading: ${fontHeading};
  --font-body: ${fontBody};
  --font-mono: ${fontMono};
  --font-serif: ${fontSerif};

  /* Border Radius - Tailwind Standard Values */
  --radius-default: ${radiusMap[defaultRadius]};
  
  /* Override Tailwind's radius values to use our default */
  --radius-none: 0;
  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;
  --radius-full: calc(infinity * 1px);

  /* Layout */
  --panel-opacity: ${panelBg === 'translucent' ? '0.8' : '1'};
}

/* Utility classes for easy usage */
@layer components {
  .btn-primary {
    @apply bg-primary-500 hover:bg-primary-600 text-white;
    border-radius: var(--radius-default);
  }
  
  .btn-secondary {
    @apply bg-neutral-200 hover:bg-neutral-300 text-neutral-900;
    border-radius: var(--radius-default);
  }
  
  .card {
    @apply bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800;
    border-radius: var(--radius-default);
    opacity: var(--panel-opacity);
  }
  
  .input {
    @apply bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700;
    border-radius: var(--radius-default);
  }
  
  .panel {
    @apply bg-white dark:bg-neutral-900;
    opacity: var(--panel-opacity);
    border-radius: var(--radius-default);
  }
}
`;
}

export function validateThemeConfig(config: Partial<ThemeConfig>): string[] {
  const errors: string[] = [];
  
  const validColors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
  const validNeutralColors = ['slate', 'gray', 'zinc', 'neutral', 'stone'];
  const validRadiusValues = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full'];
  
  if (config.primaryColor && !validColors.includes(config.primaryColor)) {
    errors.push(`Invalid primaryColor: ${config.primaryColor}. Must be one of: ${validColors.join(', ')}`);
  }
  
  if (config.neutralColor && !validNeutralColors.includes(config.neutralColor)) {
    errors.push(`Invalid neutralColor: ${config.neutralColor}. Must be one of: ${validNeutralColors.join(', ')}`);
  }
  
  if (config.defaultRadius && !validRadiusValues.includes(config.defaultRadius)) {
    errors.push(`Invalid defaultRadius: ${config.defaultRadius}. Must be one of: ${validRadiusValues.join(', ')}`);
  }
  
  if (config.defaultAppearance && !['light', 'dark'].includes(config.defaultAppearance)) {
    errors.push(`Invalid defaultAppearance: ${config.defaultAppearance}. Must be 'light' or 'dark'`);
  }
  
  if (config.panelBg && !['solid', 'translucent'].includes(config.panelBg)) {
    errors.push(`Invalid panelBg: ${config.panelBg}. Must be 'solid' or 'translucent'`);
  }
  
  return errors;
}