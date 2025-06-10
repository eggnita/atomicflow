import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'AtomicFlow Design System',
    brandUrl: '/',
    brandImage: '/logo.svg',
    brandTarget: '_self',
    colorPrimary: '#165DFB',
    colorSecondary: '#45556C',
  }),
});

// Example: Add custom CSS to Storybook manager UI
const style = document.createElement('style');
style.innerHTML = `
  img.css-32o4gv {
    max-width: 200px !important;
  }
`;
document.head.appendChild(style);