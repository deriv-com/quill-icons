import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTriangleExclamationCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTriangleExclamationCaptionRegularIcon',
  component: LabelPairedTriangleExclamationCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedTriangleExclamationCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTriangleExclamationCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
