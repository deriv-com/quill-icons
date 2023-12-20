import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightChartLineUpDownClockXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightChartLineUpDownClockXlBoldIcon',
  component: LabelPairedLightChartLineUpDownClockXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedLightChartLineUpDownClockXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightChartLineUpDownClockXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
