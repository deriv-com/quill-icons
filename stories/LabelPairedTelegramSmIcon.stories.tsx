import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTelegramSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTelegramSmIcon',
  component: LabelPairedTelegramSmIcon,
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
} satisfies Meta<typeof LabelPairedTelegramSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTelegramSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
