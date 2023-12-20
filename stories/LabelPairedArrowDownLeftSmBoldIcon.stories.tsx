import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownLeftSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownLeftSmBoldIcon',
  component: LabelPairedArrowDownLeftSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownLeftSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownLeftSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
