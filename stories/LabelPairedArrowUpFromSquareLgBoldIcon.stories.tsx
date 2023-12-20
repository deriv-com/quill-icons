import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromSquareLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromSquareLgBoldIcon',
  component: LabelPairedArrowUpFromSquareLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromSquareLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromSquareLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
