import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowLeftToLineCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowLeftToLineCaptionBoldIcon',
  component: LabelPairedArrowLeftToLineCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowLeftToLineCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowLeftToLineCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
