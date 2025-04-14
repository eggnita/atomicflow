import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { H1 } from '../components/Heading/H1';

const meta: Meta<typeof H1> = {
    title: 'Heading/H1',
    component: H1,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'muted'],
            description: 'The color variant of the heading',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'The size of the heading',
        },
        children: {
            control: 'text',
            description: 'The content of the heading',
        },
    },
    args: {
        onClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof H1>;

// Default story
export const Default: Story = {
    args: {
        children: 'Default Heading',
    },
};

// Variant stories
export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Heading',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Heading',
    },
};

export const Muted: Story = {
    args: {
        variant: 'muted',
        children: 'Muted Heading',
    },
};

// Size stories
export const Small: Story = {
    args: {
        size: 'small',
        children: 'Small Heading',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        children: 'Medium Heading',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        children: 'Large Heading',
    },
};

// Combination stories
export const SecondaryMedium: Story = {
    args: {
        variant: 'secondary',
        size: 'medium',
        children: 'Secondary Medium Heading',
    },
};

export const MutedSmall: Story = {
    args: {
        variant: 'muted',
        size: 'small',
        children: 'Muted Small Heading',
    },
};