import { fn } from '@storybook/test';
import { Button } from '../components/Button/Button';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        variant: 'primary',
        children: 'Button',
    },
};
export const Secondary = {
    args: {
        variant: 'secondary',
        children: 'Button',
    },
};
export const Danger = {
    args: {
        variant: 'danger',
        children: 'Button',
    },
};
export const Large = {
    args: {
        size: 'large',
        children: 'Button',
    },
};
export const Small = {
    args: {
        size: 'small',
        children: 'Button',
    },
};
export const ButtonDefault = {
    args: {
        variant: 'primary',
        children: 'Button',
        size: 'large',
    },
};
