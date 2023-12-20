import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRectangleAdCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRectangleAdCaptionRegularIcon',
  component: LabelPairedRectangleAdCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedRectangleAdCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRectangleAdCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
