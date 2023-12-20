import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpArrowDownLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpArrowDownLgRegularIcon',
  component: LabelPairedArrowUpArrowDownLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpArrowDownLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpArrowDownLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
