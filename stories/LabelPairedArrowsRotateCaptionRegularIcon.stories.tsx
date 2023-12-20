import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowsRotateCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowsRotateCaptionRegularIcon',
  component: LabelPairedArrowsRotateCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowsRotateCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowsRotateCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
