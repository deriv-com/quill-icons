import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareMinusLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareMinusLgRegularIcon',
  component: LabelPairedSquareMinusLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedSquareMinusLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareMinusLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
