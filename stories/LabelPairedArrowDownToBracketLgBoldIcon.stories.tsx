import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownToBracketLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownToBracketLgBoldIcon',
  component: LabelPairedArrowDownToBracketLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownToBracketLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownToBracketLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
