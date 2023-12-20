import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowsRotateLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowsRotateLgBoldIcon',
  component: LabelPairedArrowsRotateLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowsRotateLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowsRotateLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
