import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromBracketLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromBracketLgBoldIcon',
  component: LabelPairedArrowUpFromBracketLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromBracketLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromBracketLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
