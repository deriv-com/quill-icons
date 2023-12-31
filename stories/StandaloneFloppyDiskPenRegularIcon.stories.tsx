import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFloppyDiskPenRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFloppyDiskPenRegularIcon',
  component: StandaloneFloppyDiskPenRegularIcon,
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
} satisfies Meta<typeof StandaloneFloppyDiskPenRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFloppyDiskPenRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
