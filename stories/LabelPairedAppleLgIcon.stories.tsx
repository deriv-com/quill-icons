import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAppleLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAppleLgIcon',
  component: LabelPairedAppleLgIcon,
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
} satisfies Meta<typeof LabelPairedAppleLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAppleLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
