import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpRightFromSquareCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpRightFromSquareCaptionRegularIcon',
  component: LabelPairedArrowUpRightFromSquareCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpRightFromSquareCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpRightFromSquareCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
