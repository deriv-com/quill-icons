import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartLineUpDownSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartLineUpDownSmBoldIcon',
  component: LabelPairedChartLineUpDownSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartLineUpDownSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartLineUpDownSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
