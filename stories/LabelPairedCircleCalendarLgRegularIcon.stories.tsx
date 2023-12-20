import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleCalendarLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleCalendarLgRegularIcon',
  component: LabelPairedCircleCalendarLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleCalendarLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleCalendarLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
