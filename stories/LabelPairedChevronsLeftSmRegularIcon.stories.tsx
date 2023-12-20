import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronsLeftSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronsLeftSmRegularIcon',
  component: LabelPairedChevronsLeftSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedChevronsLeftSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronsLeftSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
