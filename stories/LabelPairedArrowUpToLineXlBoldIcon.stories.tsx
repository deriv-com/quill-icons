import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpToLineXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpToLineXlBoldIcon',
  component: LabelPairedArrowUpToLineXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpToLineXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpToLineXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
