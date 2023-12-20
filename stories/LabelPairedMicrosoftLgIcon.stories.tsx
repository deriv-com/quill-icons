import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrosoftLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrosoftLgIcon',
  component: LabelPairedMicrosoftLgIcon,
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
} satisfies Meta<typeof LabelPairedMicrosoftLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrosoftLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
