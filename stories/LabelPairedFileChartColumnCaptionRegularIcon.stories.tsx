import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileChartColumnCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileChartColumnCaptionRegularIcon',
  component: LabelPairedFileChartColumnCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedFileChartColumnCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileChartColumnCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
