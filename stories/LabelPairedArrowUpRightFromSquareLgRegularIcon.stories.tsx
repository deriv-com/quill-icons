import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpRightFromSquareLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpRightFromSquareLgRegularIcon',
  component: LabelPairedArrowUpRightFromSquareLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpRightFromSquareLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpRightFromSquareLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
