import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRedditSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRedditSmIcon',
  component: LabelPairedRedditSmIcon,
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
} satisfies Meta<typeof LabelPairedRedditSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRedditSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
