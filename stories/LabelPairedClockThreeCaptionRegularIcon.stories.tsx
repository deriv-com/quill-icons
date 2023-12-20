import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedClockThreeCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedClockThreeCaptionRegularIcon',
  component: LabelPairedClockThreeCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedClockThreeCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedClockThreeCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
