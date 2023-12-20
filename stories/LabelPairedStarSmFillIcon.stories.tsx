import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedStarSmFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedStarSmFillIcon',
  component: LabelPairedStarSmFillIcon,
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
} satisfies Meta<typeof LabelPairedStarSmFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedStarSmFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
