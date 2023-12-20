import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedStopwatchCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedStopwatchCaptionRegularIcon',
  component: LabelPairedStopwatchCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedStopwatchCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedStopwatchCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
