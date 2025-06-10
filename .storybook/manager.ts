import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'AtomicFlow Design System',
    brandUrl: '/',
    brandImage: '/logo-2.svg', 
    brandTarget: '_self',
  }),
});

// Example: Add custom CSS to Storybook manager UI
const style = document.createElement('style');
style.innerHTML = `
  img.css-32o4gv {
    max-width: 165px !important;
  }
  .css-1d1nb5w {
    background-color: #000000 !important;
  }
`;
document.head.appendChild(style);