import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCashRegisterXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCashRegisterXlBoldIcon',
  component: LabelPairedCashRegisterXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedCashRegisterXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCashRegisterXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
