import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneRectangleBarcodeBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneRectangleBarcodeBoldIcon',
  component: StandaloneRectangleBarcodeBoldIcon,
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
} satisfies Meta<typeof StandaloneRectangleBarcodeBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneRectangleBarcodeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
