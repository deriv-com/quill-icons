import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleBookmarkSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleBookmarkSmRegularIcon',
  component: LabelPairedCircleBookmarkSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleBookmarkSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleBookmarkSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
