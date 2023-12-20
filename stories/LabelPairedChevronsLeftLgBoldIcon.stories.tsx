import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronsLeftLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronsLeftLgBoldIcon',
  component: LabelPairedChevronsLeftLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedChevronsLeftLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronsLeftLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
