import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownToLineXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownToLineXlBoldIcon',
  component: LabelPairedArrowDownToLineXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownToLineXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownToLineXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
