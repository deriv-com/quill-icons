import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMemoCircleCheckSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMemoCircleCheckSmBoldIcon',
  component: LabelPairedMemoCircleCheckSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedMemoCircleCheckSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMemoCircleCheckSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
