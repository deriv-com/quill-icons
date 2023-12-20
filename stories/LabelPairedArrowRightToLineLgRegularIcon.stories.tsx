import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowRightToLineLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowRightToLineLgRegularIcon',
  component: LabelPairedArrowRightToLineLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowRightToLineLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowRightToLineLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
