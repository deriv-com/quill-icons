import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownLeftCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownLeftCaptionBoldIcon',
  component: LabelPairedArrowDownLeftCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownLeftCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownLeftCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
