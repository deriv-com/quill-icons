import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowLeftToLineSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowLeftToLineSmRegularIcon',
  component: LabelPairedArrowLeftToLineSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowLeftToLineSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowLeftToLineSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
