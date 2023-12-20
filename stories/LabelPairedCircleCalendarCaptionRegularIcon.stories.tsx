import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleCalendarCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleCalendarCaptionRegularIcon',
  component: LabelPairedCircleCalendarCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleCalendarCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleCalendarCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
