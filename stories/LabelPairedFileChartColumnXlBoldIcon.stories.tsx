import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileChartColumnXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileChartColumnXlBoldIcon',
  component: LabelPairedFileChartColumnXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileChartColumnXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileChartColumnXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
