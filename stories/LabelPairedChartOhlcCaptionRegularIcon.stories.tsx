import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartOhlcCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartOhlcCaptionRegularIcon',
  component: LabelPairedChartOhlcCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedChartOhlcCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartOhlcCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
