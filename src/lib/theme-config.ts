export interface ThemeConfig {
    // Colors - must match Tailwind color names
    primaryColor: 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
    neutralColor: 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone';
    
    // Typography
    fontHeading: string;
    fontBody: string;
    fontMono: string;
    fontSerif: string;
    
    // Appearance
    defaultAppearance: 'light' | 'dark';
    
    // Border Radius - using Tailwind's standard system
    defaultRadius: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
    
    panelBg: 'solid' | 'translucent';
    
    // Optional: Semantic colors
    successColor?: 'green' | 'emerald' | 'lime' | 'teal';
    warningColor?: 'yellow' | 'amber' | 'orange';
    errorColor?: 'red' | 'rose' | 'pink';
    infoColor?: 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia';
  }
  
  export const defaultTheme: ThemeConfig = {
    primaryColor: 'red',
    neutralColor: 'slate',
    fontHeading: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    fontBody: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    fontMono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    fontSerif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
    defaultAppearance: 'light',
    defaultRadius: 'md', // Using Tailwind's md radius as default
    panelBg: 'solid',
    successColor: 'green',
    warningColor: 'yellow',
    errorColor: 'red',
    infoColor: 'cyan',
  };
  
  // Export valid radius names for validation
  export const validRadiusValues = [
    'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full'
  ] as const;