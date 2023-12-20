import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareMinusCaptionFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareMinusCaptionFillIcon',
  component: LabelPairedSquareMinusCaptionFillIcon,
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
} satisfies Meta<typeof LabelPairedSquareMinusCaptionFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareMinusCaptionFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
