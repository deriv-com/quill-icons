import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedClockThreeLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedClockThreeLgBoldIcon',
  component: LabelPairedClockThreeLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedClockThreeLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedClockThreeLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
