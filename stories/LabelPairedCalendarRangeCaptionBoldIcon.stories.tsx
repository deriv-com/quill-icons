import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCalendarRangeCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCalendarRangeCaptionBoldIcon',
  component: LabelPairedCalendarRangeCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCalendarRangeCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCalendarRangeCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
