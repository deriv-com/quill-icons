import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowUpRightCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowUpRightCaptionRegularIcon',
  component: LabelPairedCircleArrowUpRightCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowUpRightCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowUpRightCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
