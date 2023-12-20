import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedStarLgFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedStarLgFillIcon',
  component: LabelPairedStarLgFillIcon,
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
} satisfies Meta<typeof LabelPairedStarLgFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedStarLgFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
