import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHandsHoldingDiamondXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHandsHoldingDiamondXlRegularIcon',
  component: LabelPairedHandsHoldingDiamondXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedHandsHoldingDiamondXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHandsHoldingDiamondXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
