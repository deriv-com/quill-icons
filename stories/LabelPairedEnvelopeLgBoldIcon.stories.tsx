import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEnvelopeLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEnvelopeLgBoldIcon',
  component: LabelPairedEnvelopeLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedEnvelopeLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEnvelopeLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
