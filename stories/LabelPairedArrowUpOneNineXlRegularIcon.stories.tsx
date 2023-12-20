import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpOneNineXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpOneNineXlRegularIcon',
  component: LabelPairedArrowUpOneNineXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpOneNineXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpOneNineXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
