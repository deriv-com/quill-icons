import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCirclePlusSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCirclePlusSmRegularIcon',
  component: LabelPairedWalletCirclePlusSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedWalletCirclePlusSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCirclePlusSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
