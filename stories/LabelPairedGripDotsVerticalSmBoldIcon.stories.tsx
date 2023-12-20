import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGripDotsVerticalSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGripDotsVerticalSmBoldIcon',
  component: LabelPairedGripDotsVerticalSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedGripDotsVerticalSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGripDotsVerticalSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
