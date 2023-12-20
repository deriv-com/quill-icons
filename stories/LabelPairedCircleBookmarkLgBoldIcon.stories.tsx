import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleBookmarkLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleBookmarkLgBoldIcon',
  component: LabelPairedCircleBookmarkLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleBookmarkLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleBookmarkLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
