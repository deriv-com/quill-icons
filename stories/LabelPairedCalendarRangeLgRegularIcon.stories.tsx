import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCalendarRangeLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCalendarRangeLgRegularIcon',
  component: LabelPairedCalendarRangeLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedCalendarRangeLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCalendarRangeLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
