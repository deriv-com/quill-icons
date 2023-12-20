import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGaugeMinSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGaugeMinSmRegularIcon',
  component: LabelPairedGaugeMinSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedGaugeMinSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGaugeMinSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
