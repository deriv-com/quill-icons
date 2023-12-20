import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCircleMinusLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCircleMinusLgRegularIcon',
  component: LabelPairedWalletCircleMinusLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedWalletCircleMinusLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCircleMinusLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
