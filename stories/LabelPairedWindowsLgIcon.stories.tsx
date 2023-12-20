import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowsLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowsLgIcon',
  component: LabelPairedWindowsLgIcon,
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
} satisfies Meta<typeof LabelPairedWindowsLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowsLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
