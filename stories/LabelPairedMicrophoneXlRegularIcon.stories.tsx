import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrophoneXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrophoneXlRegularIcon',
  component: LabelPairedMicrophoneXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedMicrophoneXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrophoneXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
