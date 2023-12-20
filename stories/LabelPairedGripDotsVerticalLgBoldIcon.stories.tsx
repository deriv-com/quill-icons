import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGripDotsVerticalLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGripDotsVerticalLgBoldIcon',
  component: LabelPairedGripDotsVerticalLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedGripDotsVerticalLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGripDotsVerticalLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
