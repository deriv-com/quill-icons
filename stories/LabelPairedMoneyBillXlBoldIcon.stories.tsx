import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMoneyBillXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMoneyBillXlBoldIcon',
  component: LabelPairedMoneyBillXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedMoneyBillXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMoneyBillXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
