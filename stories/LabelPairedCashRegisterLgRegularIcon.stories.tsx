import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCashRegisterLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCashRegisterLgRegularIcon',
  component: LabelPairedCashRegisterLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedCashRegisterLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCashRegisterLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
