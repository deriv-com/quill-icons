import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowRightToLineXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowRightToLineXlBoldIcon',
  component: LabelPairedArrowRightToLineXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowRightToLineXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowRightToLineXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
