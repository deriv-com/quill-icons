import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMoneyBillLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMoneyBillLgRegularIcon',
  component: LabelPairedMoneyBillLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedMoneyBillLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMoneyBillLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
