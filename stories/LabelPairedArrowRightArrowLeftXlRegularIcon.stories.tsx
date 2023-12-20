import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowRightArrowLeftXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowRightArrowLeftXlRegularIcon',
  component: LabelPairedArrowRightArrowLeftXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowRightArrowLeftXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowRightArrowLeftXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
