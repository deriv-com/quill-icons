import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePlayBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandalonePlayBoldIcon',
  component: StandalonePlayBoldIcon,
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
} satisfies Meta<typeof StandalonePlayBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePlayBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
