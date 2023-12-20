import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronsLeftXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronsLeftXlRegularIcon',
  component: LabelPairedChevronsLeftXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedChevronsLeftXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronsLeftXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
