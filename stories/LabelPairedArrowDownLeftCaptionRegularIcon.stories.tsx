import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownLeftCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownLeftCaptionRegularIcon',
  component: LabelPairedArrowDownLeftCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownLeftCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownLeftCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
