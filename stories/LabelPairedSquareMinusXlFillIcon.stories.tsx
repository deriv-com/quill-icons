import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareMinusXlFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareMinusXlFillIcon',
  component: LabelPairedSquareMinusXlFillIcon,
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
} satisfies Meta<typeof LabelPairedSquareMinusXlFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareMinusXlFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
