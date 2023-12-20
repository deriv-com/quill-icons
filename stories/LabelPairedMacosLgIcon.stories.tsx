import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMacosLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMacosLgIcon',
  component: LabelPairedMacosLgIcon,
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
} satisfies Meta<typeof LabelPairedMacosLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMacosLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
