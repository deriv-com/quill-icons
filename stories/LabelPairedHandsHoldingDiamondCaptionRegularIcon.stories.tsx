import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHandsHoldingDiamondCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHandsHoldingDiamondCaptionRegularIcon',
  component: LabelPairedHandsHoldingDiamondCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedHandsHoldingDiamondCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHandsHoldingDiamondCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
