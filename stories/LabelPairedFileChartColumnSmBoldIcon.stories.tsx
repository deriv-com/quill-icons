import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileChartColumnSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileChartColumnSmBoldIcon',
  component: LabelPairedFileChartColumnSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileChartColumnSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileChartColumnSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
