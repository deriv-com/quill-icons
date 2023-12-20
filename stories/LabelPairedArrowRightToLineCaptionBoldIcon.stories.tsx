import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowRightToLineCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowRightToLineCaptionBoldIcon',
  component: LabelPairedArrowRightToLineCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowRightToLineCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowRightToLineCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
