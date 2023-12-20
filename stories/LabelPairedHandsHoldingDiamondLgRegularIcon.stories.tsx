import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHandsHoldingDiamondLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHandsHoldingDiamondLgRegularIcon',
  component: LabelPairedHandsHoldingDiamondLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedHandsHoldingDiamondLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHandsHoldingDiamondLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
