import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownLeftSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownLeftSmRegularIcon',
  component: LabelPairedArrowDownLeftSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownLeftSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownLeftSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
