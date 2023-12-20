import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTakeProfitLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTakeProfitLgBoldIcon',
  component: LabelPairedTakeProfitLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedTakeProfitLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTakeProfitLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
