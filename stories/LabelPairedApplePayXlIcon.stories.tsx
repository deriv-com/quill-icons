import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedApplePayXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedApplePayXlIcon',
  component: LabelPairedApplePayXlIcon,
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
} satisfies Meta<typeof LabelPairedApplePayXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedApplePayXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
