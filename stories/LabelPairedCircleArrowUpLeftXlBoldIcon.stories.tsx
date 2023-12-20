import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowUpLeftXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowUpLeftXlBoldIcon',
  component: LabelPairedCircleArrowUpLeftXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowUpLeftXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowUpLeftXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
