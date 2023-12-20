import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownToBracketSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownToBracketSmBoldIcon',
  component: LabelPairedArrowDownToBracketSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownToBracketSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownToBracketSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
