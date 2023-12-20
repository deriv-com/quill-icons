import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartCandlestickCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartCandlestickCaptionRegularIcon',
  component: LabelPairedChartCandlestickCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedChartCandlestickCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartCandlestickCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
