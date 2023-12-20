import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrophoneXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrophoneXlBoldIcon',
  component: LabelPairedMicrophoneXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedMicrophoneXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrophoneXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
