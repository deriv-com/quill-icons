import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartLineUpDownXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartLineUpDownXlRegularIcon',
  component: LabelPairedChartLineUpDownXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedChartLineUpDownXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartLineUpDownXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
