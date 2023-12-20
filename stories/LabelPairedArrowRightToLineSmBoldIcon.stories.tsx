import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowRightToLineSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowRightToLineSmBoldIcon',
  component: LabelPairedArrowRightToLineSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowRightToLineSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowRightToLineSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
