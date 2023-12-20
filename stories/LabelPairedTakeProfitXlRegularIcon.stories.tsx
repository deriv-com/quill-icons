import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTakeProfitXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTakeProfitXlRegularIcon',
  component: LabelPairedTakeProfitXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedTakeProfitXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTakeProfitXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
