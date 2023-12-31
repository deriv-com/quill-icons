import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFloppyDiskBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFloppyDiskBoldIcon',
  component: StandaloneFloppyDiskBoldIcon,
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
} satisfies Meta<typeof StandaloneFloppyDiskBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFloppyDiskBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
