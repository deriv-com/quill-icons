import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCalendarRangeCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCalendarRangeCaptionRegularIcon',
  component: LabelPairedCalendarRangeCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedCalendarRangeCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCalendarRangeCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
