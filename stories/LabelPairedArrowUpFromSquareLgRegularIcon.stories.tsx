import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromSquareLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromSquareLgRegularIcon',
  component: LabelPairedArrowUpFromSquareLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromSquareLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromSquareLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
