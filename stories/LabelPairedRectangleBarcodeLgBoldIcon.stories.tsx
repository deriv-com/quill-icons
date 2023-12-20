import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRectangleBarcodeLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRectangleBarcodeLgBoldIcon',
  component: LabelPairedRectangleBarcodeLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedRectangleBarcodeLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRectangleBarcodeLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
