import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCirclePlusXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCirclePlusXlRegularIcon',
  component: LabelPairedWalletCirclePlusXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedWalletCirclePlusXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCirclePlusXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
