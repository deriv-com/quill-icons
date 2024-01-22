import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMacosXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMacosXlIcon',
  component: LabelPairedMacosXlIcon,
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
} satisfies Meta<typeof LabelPairedMacosXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMacosXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};