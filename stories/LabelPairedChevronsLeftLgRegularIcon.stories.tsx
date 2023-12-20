import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronsLeftLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronsLeftLgRegularIcon',
  component: LabelPairedChevronsLeftLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedChevronsLeftLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronsLeftLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
