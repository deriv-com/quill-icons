import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartOhlcSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartOhlcSmRegularIcon',
  component: LabelPairedChartOhlcSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedChartOhlcSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartOhlcSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
