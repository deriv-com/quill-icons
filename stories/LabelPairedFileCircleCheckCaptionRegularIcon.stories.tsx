import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleCheckCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleCheckCaptionRegularIcon',
  component: LabelPairedFileCircleCheckCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleCheckCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleCheckCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
