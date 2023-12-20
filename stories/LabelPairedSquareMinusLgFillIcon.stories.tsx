import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareMinusLgFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareMinusLgFillIcon',
  component: LabelPairedSquareMinusLgFillIcon,
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
} satisfies Meta<typeof LabelPairedSquareMinusLgFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareMinusLgFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
