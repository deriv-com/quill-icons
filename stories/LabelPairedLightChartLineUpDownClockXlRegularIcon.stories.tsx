import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightChartLineUpDownClockXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightChartLineUpDownClockXlRegularIcon',
  component: LabelPairedLightChartLineUpDownClockXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedLightChartLineUpDownClockXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightChartLineUpDownClockXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
