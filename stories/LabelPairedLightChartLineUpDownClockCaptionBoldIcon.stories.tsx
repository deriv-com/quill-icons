import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightChartLineUpDownClockCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightChartLineUpDownClockCaptionBoldIcon',
  component: LabelPairedLightChartLineUpDownClockCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedLightChartLineUpDownClockCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightChartLineUpDownClockCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
