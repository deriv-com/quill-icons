import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpRightFromSquareXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpRightFromSquareXlBoldIcon',
  component: LabelPairedArrowUpRightFromSquareXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpRightFromSquareXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpRightFromSquareXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
