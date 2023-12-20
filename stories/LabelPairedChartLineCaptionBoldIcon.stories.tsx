import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartLineCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartLineCaptionBoldIcon',
  component: LabelPairedChartLineCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartLineCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartLineCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
