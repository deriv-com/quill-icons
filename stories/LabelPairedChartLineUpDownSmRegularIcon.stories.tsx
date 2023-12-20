import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartLineUpDownSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartLineUpDownSmRegularIcon',
  component: LabelPairedChartLineUpDownSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedChartLineUpDownSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartLineUpDownSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
