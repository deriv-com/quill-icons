import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLocationCrosshairsBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneLocationCrosshairsBoldIcon',
  component: StandaloneLocationCrosshairsBoldIcon,
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
} satisfies Meta<typeof StandaloneLocationCrosshairsBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLocationCrosshairsBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
