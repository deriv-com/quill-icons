import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightChartLineUpDownClockCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightChartLineUpDownClockCaptionRegularIcon',
  component: LabelPairedLightChartLineUpDownClockCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedLightChartLineUpDownClockCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightChartLineUpDownClockCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
