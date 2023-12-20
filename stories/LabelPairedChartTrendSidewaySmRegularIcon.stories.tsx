import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartTrendSidewaySmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartTrendSidewaySmRegularIcon',
  component: LabelPairedChartTrendSidewaySmRegularIcon,
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
} satisfies Meta<typeof LabelPairedChartTrendSidewaySmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartTrendSidewaySmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
