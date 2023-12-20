import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHandsHoldingDiamondCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHandsHoldingDiamondCaptionBoldIcon',
  component: LabelPairedHandsHoldingDiamondCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedHandsHoldingDiamondCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHandsHoldingDiamondCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
