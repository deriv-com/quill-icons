import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpRightFromSquareSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpRightFromSquareSmRegularIcon',
  component: LabelPairedArrowUpRightFromSquareSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpRightFromSquareSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpRightFromSquareSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
