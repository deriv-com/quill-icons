import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMoneyBillLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMoneyBillLgBoldIcon',
  component: LabelPairedMoneyBillLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedMoneyBillLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMoneyBillLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
