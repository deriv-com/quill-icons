import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownOneNineSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownOneNineSmBoldIcon',
  component: LabelPairedArrowDownOneNineSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownOneNineSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownOneNineSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
