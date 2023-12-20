import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightChartLineUpDownClockLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightChartLineUpDownClockLgRegularIcon',
  component: LabelPairedLightChartLineUpDownClockLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedLightChartLineUpDownClockLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightChartLineUpDownClockLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
