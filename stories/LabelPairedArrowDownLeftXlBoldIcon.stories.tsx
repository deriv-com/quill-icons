import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownLeftXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownLeftXlBoldIcon',
  component: LabelPairedArrowDownLeftXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownLeftXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownLeftXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
