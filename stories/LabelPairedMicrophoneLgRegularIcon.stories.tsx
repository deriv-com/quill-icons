import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrophoneLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrophoneLgRegularIcon',
  component: LabelPairedMicrophoneLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedMicrophoneLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrophoneLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
