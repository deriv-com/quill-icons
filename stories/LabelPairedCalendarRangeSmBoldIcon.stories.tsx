import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCalendarRangeSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCalendarRangeSmBoldIcon',
  component: LabelPairedCalendarRangeSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedCalendarRangeSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCalendarRangeSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
