import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromBracketSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromBracketSmBoldIcon',
  component: LabelPairedArrowUpFromBracketSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromBracketSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromBracketSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
