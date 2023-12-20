import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronLeftCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronLeftCaptionRegularIcon',
  component: LabelPairedCircleChevronLeftCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronLeftCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronLeftCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
