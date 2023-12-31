import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePenLineBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandalonePenLineBoldIcon',
  component: StandalonePenLineBoldIcon,
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
} satisfies Meta<typeof StandalonePenLineBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePenLineBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
