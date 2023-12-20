import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTakeProfitLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTakeProfitLgRegularIcon',
  component: LabelPairedTakeProfitLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedTakeProfitLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTakeProfitLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
