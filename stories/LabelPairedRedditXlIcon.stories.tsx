import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRedditXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRedditXlIcon',
  component: LabelPairedRedditXlIcon,
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
} satisfies Meta<typeof LabelPairedRedditXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRedditXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
