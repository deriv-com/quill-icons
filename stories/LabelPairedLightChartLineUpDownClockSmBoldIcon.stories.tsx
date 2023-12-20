import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightChartLineUpDownClockSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightChartLineUpDownClockSmBoldIcon',
  component: LabelPairedLightChartLineUpDownClockSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedLightChartLineUpDownClockSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightChartLineUpDownClockSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
