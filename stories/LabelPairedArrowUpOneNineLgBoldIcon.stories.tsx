import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpOneNineLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpOneNineLgBoldIcon',
  component: LabelPairedArrowUpOneNineLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpOneNineLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpOneNineLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
