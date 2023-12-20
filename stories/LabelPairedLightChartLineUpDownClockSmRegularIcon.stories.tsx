import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightChartLineUpDownClockSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightChartLineUpDownClockSmRegularIcon',
  component: LabelPairedLightChartLineUpDownClockSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedLightChartLineUpDownClockSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightChartLineUpDownClockSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
