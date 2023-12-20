import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileChartColumnLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileChartColumnLgBoldIcon',
  component: LabelPairedFileChartColumnLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileChartColumnLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileChartColumnLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
