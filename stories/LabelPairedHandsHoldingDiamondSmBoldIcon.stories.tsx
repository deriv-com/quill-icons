import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHandsHoldingDiamondSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHandsHoldingDiamondSmBoldIcon',
  component: LabelPairedHandsHoldingDiamondSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedHandsHoldingDiamondSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHandsHoldingDiamondSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
