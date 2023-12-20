import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartOhlcSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartOhlcSmBoldIcon',
  component: LabelPairedChartOhlcSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartOhlcSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartOhlcSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
