import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRectangleBarcodeCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRectangleBarcodeCaptionRegularIcon',
  component: LabelPairedRectangleBarcodeCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedRectangleBarcodeCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRectangleBarcodeCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
