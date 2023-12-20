import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMemoCircleCheckSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMemoCircleCheckSmRegularIcon',
  component: LabelPairedMemoCircleCheckSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedMemoCircleCheckSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMemoCircleCheckSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
