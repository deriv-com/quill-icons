import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpLeftLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpLeftLgRegularIcon',
  component: LabelPairedArrowUpLeftLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpLeftLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpLeftLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
