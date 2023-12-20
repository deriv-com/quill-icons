import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedApplePayLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedApplePayLgIcon',
  component: LabelPairedApplePayLgIcon,
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
} satisfies Meta<typeof LabelPairedApplePayLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedApplePayLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
