import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowRightArrowLeftLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowRightArrowLeftLgBoldIcon',
  component: LabelPairedArrowRightArrowLeftLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowRightArrowLeftLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowRightArrowLeftLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
