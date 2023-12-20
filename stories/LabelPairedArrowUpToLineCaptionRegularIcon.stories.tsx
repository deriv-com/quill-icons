import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpToLineCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpToLineCaptionRegularIcon',
  component: LabelPairedArrowUpToLineCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpToLineCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpToLineCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
