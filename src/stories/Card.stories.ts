import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'flat', 'elevated'],
      description: 'The variant of the card',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the card',
    },
    children: {
      control: 'text',
      description: 'The content of the card',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Default story
export const Default: Story = {
  args: {
    children: 'Default Card Content',
  },
};

// Variant stories
export const Flat: Story = {
  args: {
    variant: 'flat',
    children: 'Flat Card Content',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: 'Elevated Card Content',
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Card Content',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Card Content',
  },
};

// Combination stories
export const FlatSmall: Story = {
  args: {
    variant: 'flat',
    size: 'small',
    children: 'Flat Small Card Content',
  },
};

export const ElevatedLarge: Story = {
  args: {
    variant: 'elevated',
    size: 'large',
    children: 'Elevated Large Card Content',
  },
};
