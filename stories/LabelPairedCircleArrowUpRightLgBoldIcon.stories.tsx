import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowUpRightLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowUpRightLgBoldIcon',
  component: LabelPairedCircleArrowUpRightLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowUpRightLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowUpRightLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
