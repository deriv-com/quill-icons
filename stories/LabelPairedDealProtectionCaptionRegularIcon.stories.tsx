import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDealProtectionCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDealProtectionCaptionRegularIcon',
  component: LabelPairedDealProtectionCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedDealProtectionCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDealProtectionCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
