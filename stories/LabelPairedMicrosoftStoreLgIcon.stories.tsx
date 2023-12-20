import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrosoftStoreLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrosoftStoreLgIcon',
  component: LabelPairedMicrosoftStoreLgIcon,
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
} satisfies Meta<typeof LabelPairedMicrosoftStoreLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrosoftStoreLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
