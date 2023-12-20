import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMinimizeCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMinimizeCaptionRegularIcon',
  component: LabelPairedWindowMinimizeCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedWindowMinimizeCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMinimizeCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
