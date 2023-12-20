import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareCheckXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareCheckXlBoldIcon',
  component: LabelPairedSquareCheckXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedSquareCheckXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareCheckXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
