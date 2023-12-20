import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowRightArrowLeftCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowRightArrowLeftCaptionRegularIcon',
  component: LabelPairedArrowRightArrowLeftCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowRightArrowLeftCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowRightArrowLeftCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
