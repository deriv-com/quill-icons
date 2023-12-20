import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDealProtectionSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDealProtectionSmBoldIcon',
  component: LabelPairedDealProtectionSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedDealProtectionSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDealProtectionSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
