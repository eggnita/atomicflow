/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
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
