import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpRightFromSquareCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpRightFromSquareCaptionBoldIcon',
  component: LabelPairedArrowUpRightFromSquareCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpRightFromSquareCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpRightFromSquareCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
