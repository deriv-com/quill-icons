import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleStarSmFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleStarSmFillIcon',
  component: LabelPairedCircleStarSmFillIcon,
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
} satisfies Meta<typeof LabelPairedCircleStarSmFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleStarSmFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
