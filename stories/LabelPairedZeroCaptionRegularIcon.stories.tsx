import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedZeroCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedZeroCaptionRegularIcon',
  component: LabelPairedZeroCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedZeroCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedZeroCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
