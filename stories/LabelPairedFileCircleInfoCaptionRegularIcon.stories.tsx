import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleInfoCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleInfoCaptionRegularIcon',
  component: LabelPairedFileCircleInfoCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleInfoCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleInfoCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
