/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // If you have a demo index.html
    './src/**/*.{js,ts,jsx,tsx}', // Your library components
    './stories/**/*.{js,ts,jsx,tsx,mdx}', // Storybook stories (add later)
  ],
  theme: {
    extend: {
      // Add your company's design system tokens here
      // Example:
      // colors: {
      //   'brand-primary': '#FF5733',
      //   'brand-secondary': '#33CFFF',
      // },
      // fontFamily: {
      //   sans: ['Your Font Name', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};
