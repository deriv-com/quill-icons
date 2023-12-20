import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHandsHoldingDiamondXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHandsHoldingDiamondXlBoldIcon',
  component: LabelPairedHandsHoldingDiamondXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedHandsHoldingDiamondXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHandsHoldingDiamondXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
