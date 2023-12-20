import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartCandlestickSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartCandlestickSmBoldIcon',
  component: LabelPairedChartCandlestickSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartCandlestickSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartCandlestickSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
