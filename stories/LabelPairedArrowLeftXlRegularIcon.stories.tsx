import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowLeftXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowLeftXlRegularIcon',
  component: LabelPairedArrowLeftXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowLeftXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowLeftXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
