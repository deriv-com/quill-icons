import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGaugeMaxXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGaugeMaxXlBoldIcon',
  component: LabelPairedGaugeMaxXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedGaugeMaxXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGaugeMaxXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
