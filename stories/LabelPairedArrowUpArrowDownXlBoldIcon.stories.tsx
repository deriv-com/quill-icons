import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpArrowDownXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpArrowDownXlBoldIcon',
  component: LabelPairedArrowUpArrowDownXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpArrowDownXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpArrowDownXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
