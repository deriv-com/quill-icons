import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrophoneLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrophoneLgBoldIcon',
  component: LabelPairedMicrophoneLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedMicrophoneLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrophoneLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
