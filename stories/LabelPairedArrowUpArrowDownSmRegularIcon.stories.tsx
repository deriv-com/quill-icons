import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpArrowDownSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpArrowDownSmRegularIcon',
  component: LabelPairedArrowUpArrowDownSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpArrowDownSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpArrowDownSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
