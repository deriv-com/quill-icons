import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleStarLgFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleStarLgFillIcon',
  component: LabelPairedCircleStarLgFillIcon,
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
} satisfies Meta<typeof LabelPairedCircleStarLgFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleStarLgFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
