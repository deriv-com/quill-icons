import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTabletScreenSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTabletScreenSmRegularIcon',
  component: LabelPairedTabletScreenSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedTabletScreenSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTabletScreenSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
