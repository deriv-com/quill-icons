import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightChartLineUpDownClockLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightChartLineUpDownClockLgBoldIcon',
  component: LabelPairedLightChartLineUpDownClockLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedLightChartLineUpDownClockLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightChartLineUpDownClockLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
