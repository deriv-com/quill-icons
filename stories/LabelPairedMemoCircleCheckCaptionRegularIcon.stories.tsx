import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMemoCircleCheckCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMemoCircleCheckCaptionRegularIcon',
  component: LabelPairedMemoCircleCheckCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedMemoCircleCheckCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMemoCircleCheckCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
