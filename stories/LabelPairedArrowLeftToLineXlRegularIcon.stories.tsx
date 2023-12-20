import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowLeftToLineXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowLeftToLineXlRegularIcon',
  component: LabelPairedArrowLeftToLineXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowLeftToLineXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowLeftToLineXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
