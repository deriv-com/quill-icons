import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowsRotateXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowsRotateXlBoldIcon',
  component: LabelPairedArrowsRotateXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowsRotateXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowsRotateXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
