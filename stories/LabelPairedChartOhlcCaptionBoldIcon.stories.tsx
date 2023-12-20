import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartOhlcCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartOhlcCaptionBoldIcon',
  component: LabelPairedChartOhlcCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartOhlcCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartOhlcCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
