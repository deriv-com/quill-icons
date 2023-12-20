import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHandsHoldingDiamondLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHandsHoldingDiamondLgBoldIcon',
  component: LabelPairedHandsHoldingDiamondLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedHandsHoldingDiamondLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHandsHoldingDiamondLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
