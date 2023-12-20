import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronsUpSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronsUpSmBoldIcon',
  component: LabelPairedChevronsUpSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedChevronsUpSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronsUpSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
