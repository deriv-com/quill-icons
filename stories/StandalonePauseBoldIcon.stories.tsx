import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePauseBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandalonePauseBoldIcon',
  component: StandalonePauseBoldIcon,
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
} satisfies Meta<typeof StandalonePauseBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePauseBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
