import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpOneNineSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpOneNineSmBoldIcon',
  component: LabelPairedArrowUpOneNineSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpOneNineSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpOneNineSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
