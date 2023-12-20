import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromSquareCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromSquareCaptionRegularIcon',
  component: LabelPairedArrowUpFromSquareCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromSquareCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromSquareCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
