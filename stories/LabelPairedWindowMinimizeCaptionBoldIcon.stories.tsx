import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMinimizeCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMinimizeCaptionBoldIcon',
  component: LabelPairedWindowMinimizeCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedWindowMinimizeCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMinimizeCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
