import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDealCancellationCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDealCancellationCaptionRegularIcon',
  component: LabelPairedDealCancellationCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedDealCancellationCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDealCancellationCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
