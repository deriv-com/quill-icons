import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleSterlingLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleSterlingLgBoldIcon',
  component: LabelPairedCircleSterlingLgBoldIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabelPairedCircleSterlingLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleSterlingLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
