import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTelegramLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTelegramLgIcon',
  component: LabelPairedTelegramLgIcon,
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
} satisfies Meta<typeof LabelPairedTelegramLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTelegramLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
