import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCirclePlusLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCirclePlusLgBoldIcon',
  component: LabelPairedWalletCirclePlusLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedWalletCirclePlusLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCirclePlusLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
