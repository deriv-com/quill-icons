import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowUpLeftLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowUpLeftLgBoldIcon',
  component: LabelPairedCircleArrowUpLeftLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowUpLeftLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowUpLeftLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
