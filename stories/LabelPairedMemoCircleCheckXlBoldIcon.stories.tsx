import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMemoCircleCheckXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMemoCircleCheckXlBoldIcon',
  component: LabelPairedMemoCircleCheckXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedMemoCircleCheckXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMemoCircleCheckXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
