import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpRightFromSquareSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpRightFromSquareSmBoldIcon',
  component: LabelPairedArrowUpRightFromSquareSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpRightFromSquareSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpRightFromSquareSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
