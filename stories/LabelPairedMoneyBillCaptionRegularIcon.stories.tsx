import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMoneyBillCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMoneyBillCaptionRegularIcon',
  component: LabelPairedMoneyBillCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedMoneyBillCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMoneyBillCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
