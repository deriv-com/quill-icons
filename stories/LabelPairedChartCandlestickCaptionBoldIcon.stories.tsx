import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartCandlestickCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartCandlestickCaptionBoldIcon',
  component: LabelPairedChartCandlestickCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartCandlestickCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartCandlestickCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
