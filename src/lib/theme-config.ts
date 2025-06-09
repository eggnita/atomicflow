// Define the color scale interface
interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

// Valid Tailwind color names
type TailwindColorName = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';

type TailwindNeutralName = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone';

export interface ThemeConfig {
  /**
   * Primary Color Configuration
   * 
   * You can use either:
   * 1. Tailwind color names: 'blue', 'emerald', 'rose', etc.
   * 2. Custom color scale object with ALL shades from 50 to 950
   * 
   * Example with Tailwind color:
   * primaryColor: 'blue'
   * 
   * Example with custom color scale:
   * primaryColor: {
   *   50: '#f0f9ff',   // Lightest shade
   *   100: '#e0f2fe',
   *   200: '#bae6fd',
   *   300: '#7dd3fc',
   *   400: '#38bdf8',
   *   500: '#0ea5e9',  // Main brand color (used for bg-primary-500)
   *   600: '#0284c7',
   *   700: '#0369a1',
   *   800: '#075985',
   *   900: '#0c4a6e',
   *   950: '#082f49'   // Darkest shade
   * }
   * 
   * ⚠️ IMPORTANT: If using custom colors, you MUST provide ALL 11 shades (50-950)
   */
  primaryColor: TailwindColorName | ColorScale;

  /**
   * Neutral Color Configuration
   * 
   * Same as primaryColor - use Tailwind names OR custom scale:
   * 
   * Tailwind examples: 'slate', 'gray', 'zinc', 'neutral', 'stone'
   * 
   * Custom example:
   * neutralColor: {
   *   50: '#fafafa',
   *   100: '#f4f4f5',
   *   200: '#e4e4e7',
   *   300: '#d4d4d8',
   *   400: '#a1a1aa',
   *   500: '#71717a',  // Used for text and borders
   *   600: '#52525b',
   *   700: '#3f3f46',
   *   800: '#27272a',
   *   900: '#18181b',
   *   950: '#09090b'
   * }
   */
  neutralColor: TailwindNeutralName | ColorScale;
  
  /**
   * Typography Configuration
   * 
   * You can use several approaches for fonts:
   * 
   * 1. **System Fonts** (default, no loading required):
   *    fontHeading: 'ui-sans-serif, system-ui, sans-serif'
   * 
   * 2. **Google Fonts** (see documentation for import setup):
   *    fontHeading: '"Inter", ui-sans-serif, system-ui, sans-serif'
   * 
   * 3. **Custom Fonts** (place in public/fonts/ folder):
   *    fontHeading: '"CustomFont", ui-sans-serif, system-ui, sans-serif'
   * 
   * 4. **Typekit/Adobe Fonts** (see documentation for setup):
   *    fontHeading: '"source-sans-pro", ui-sans-serif, system-ui, sans-serif'
   * 
   * Always include fallback fonts for better performance and accessibility.
   */
  fontHeading: string;
  fontBody: string;
  fontMono: string;
  fontSerif: string;
  
  // Appearance
  defaultAppearance: 'light' | 'dark' | 'system';
  defaultRadius: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
  panelBg: 'solid' | 'translucent';
  
  /**
   * Optional Semantic Colors
   * 
   * These follow the same pattern as primaryColor and neutralColor.
   * Use Tailwind color names OR custom color scales with all shades 50-950.
   * 
   * Examples:
   * successColor: 'green'  // Tailwind color
   * errorColor: {          // Custom color scale
   *   50: '#fef2f2',
   *   100: '#fee2e2',
   *   // ... all shades required
   *   950: '#450a0a'
   * }
   */
  successColor?: TailwindColorName | ColorScale;
  warningColor?: TailwindColorName | ColorScale;
  errorColor?: TailwindColorName | ColorScale;
  infoColor?: TailwindColorName | ColorScale;
}

export const defaultTheme: ThemeConfig = {
  primaryColor: 'blue',      // Using Tailwind color name
  neutralColor: 'slate',     // Using Tailwind color name

  // Default system fonts (no loading required, best performance)
  fontHeading: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  fontBody: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  fontMono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  fontSerif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
  
  defaultAppearance: 'light',
  defaultRadius: 'md',
  panelBg: 'solid',
  
  successColor: 'green',     // Using Tailwind color names
  warningColor: 'yellow',
  errorColor: 'red',
  infoColor: 'cyan',
};

// Export types for users
export type { ColorScale, TailwindColorName, TailwindNeutralName };

// Helper function to check if a color is a custom scale
export function isCustomColorScale(color: any): color is ColorScale {
  return typeof color === 'object' && 
         color !== null && 
         '50' in color && 
         '950' in color;
}

// Export valid radius names for validation
export const validRadiusValues = [
  'none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full'
] as const;