import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCashRegisterLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCashRegisterLgBoldIcon',
  component: LabelPairedCashRegisterLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedCashRegisterLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCashRegisterLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
