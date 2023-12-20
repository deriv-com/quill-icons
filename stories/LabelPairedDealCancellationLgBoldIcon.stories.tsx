import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDealCancellationLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDealCancellationLgBoldIcon',
  component: LabelPairedDealCancellationLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedDealCancellationLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDealCancellationLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
