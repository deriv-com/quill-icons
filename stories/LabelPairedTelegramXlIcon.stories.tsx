import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTelegramXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTelegramXlIcon',
  component: LabelPairedTelegramXlIcon,
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
} satisfies Meta<typeof LabelPairedTelegramXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTelegramXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
