import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCircleMinusSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCircleMinusSmRegularIcon',
  component: LabelPairedWalletCircleMinusSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedWalletCircleMinusSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCircleMinusSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
