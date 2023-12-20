import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowsSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowsSmIcon',
  component: LabelPairedWindowsSmIcon,
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
} satisfies Meta<typeof LabelPairedWindowsSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowsSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
