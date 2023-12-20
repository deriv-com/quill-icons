import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedStopwatchCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedStopwatchCaptionBoldIcon',
  component: LabelPairedStopwatchCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedStopwatchCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedStopwatchCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
