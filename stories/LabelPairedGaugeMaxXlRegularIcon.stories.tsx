import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGaugeMaxXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGaugeMaxXlRegularIcon',
  component: LabelPairedGaugeMaxXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedGaugeMaxXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGaugeMaxXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
