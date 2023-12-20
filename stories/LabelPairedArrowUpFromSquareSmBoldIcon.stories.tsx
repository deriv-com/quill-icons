import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromSquareSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromSquareSmBoldIcon',
  component: LabelPairedArrowUpFromSquareSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromSquareSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromSquareSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
