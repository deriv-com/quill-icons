import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpLeftXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpLeftXlBoldIcon',
  component: LabelPairedArrowUpLeftXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpLeftXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpLeftXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
