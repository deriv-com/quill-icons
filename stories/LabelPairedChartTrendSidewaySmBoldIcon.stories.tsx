import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartTrendSidewaySmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartTrendSidewaySmBoldIcon',
  component: LabelPairedChartTrendSidewaySmBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartTrendSidewaySmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartTrendSidewaySmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
