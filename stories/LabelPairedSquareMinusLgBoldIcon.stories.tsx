import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareMinusLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareMinusLgBoldIcon',
  component: LabelPairedSquareMinusLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedSquareMinusLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareMinusLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
