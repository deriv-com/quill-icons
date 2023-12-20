import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpOneNineXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpOneNineXlBoldIcon',
  component: LabelPairedArrowUpOneNineXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpOneNineXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpOneNineXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
