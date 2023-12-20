import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMaximizeCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMaximizeCaptionBoldIcon',
  component: LabelPairedWindowMaximizeCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedWindowMaximizeCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMaximizeCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
