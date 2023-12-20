import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedForwardStepCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedForwardStepCaptionRegularIcon',
  component: LabelPairedForwardStepCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedForwardStepCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedForwardStepCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
