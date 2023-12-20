import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartTrendSidewayCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartTrendSidewayCaptionBoldIcon',
  component: LabelPairedChartTrendSidewayCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartTrendSidewayCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartTrendSidewayCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
