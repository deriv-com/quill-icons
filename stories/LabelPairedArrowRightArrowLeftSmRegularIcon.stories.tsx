import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowRightArrowLeftSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowRightArrowLeftSmRegularIcon',
  component: LabelPairedArrowRightArrowLeftSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowRightArrowLeftSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowRightArrowLeftSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
