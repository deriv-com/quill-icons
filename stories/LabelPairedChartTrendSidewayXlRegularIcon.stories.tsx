import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartTrendSidewayXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartTrendSidewayXlRegularIcon',
  component: LabelPairedChartTrendSidewayXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedChartTrendSidewayXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartTrendSidewayXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
