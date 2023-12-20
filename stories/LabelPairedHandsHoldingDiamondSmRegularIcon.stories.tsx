import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHandsHoldingDiamondSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHandsHoldingDiamondSmRegularIcon',
  component: LabelPairedHandsHoldingDiamondSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedHandsHoldingDiamondSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHandsHoldingDiamondSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
