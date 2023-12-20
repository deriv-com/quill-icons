import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpToLineSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpToLineSmBoldIcon',
  component: LabelPairedArrowUpToLineSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpToLineSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpToLineSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
