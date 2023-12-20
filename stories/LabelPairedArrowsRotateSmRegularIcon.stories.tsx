import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowsRotateSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowsRotateSmRegularIcon',
  component: LabelPairedArrowsRotateSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowsRotateSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowsRotateSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
