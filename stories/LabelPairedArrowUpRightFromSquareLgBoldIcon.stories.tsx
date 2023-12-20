import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpRightFromSquareLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpRightFromSquareLgBoldIcon',
  component: LabelPairedArrowUpRightFromSquareLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpRightFromSquareLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpRightFromSquareLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
