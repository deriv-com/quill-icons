import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrophoneSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrophoneSmRegularIcon',
  component: LabelPairedMicrophoneSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedMicrophoneSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrophoneSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
