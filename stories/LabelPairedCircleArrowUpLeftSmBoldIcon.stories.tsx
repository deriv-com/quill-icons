import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowUpLeftSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowUpLeftSmBoldIcon',
  component: LabelPairedCircleArrowUpLeftSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowUpLeftSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowUpLeftSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
