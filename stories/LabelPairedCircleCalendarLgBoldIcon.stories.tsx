import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleCalendarLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleCalendarLgBoldIcon',
  component: LabelPairedCircleCalendarLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleCalendarLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleCalendarLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
