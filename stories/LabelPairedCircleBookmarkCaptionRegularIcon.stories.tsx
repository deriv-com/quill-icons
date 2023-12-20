import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleBookmarkCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleBookmarkCaptionRegularIcon',
  component: LabelPairedCircleBookmarkCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleBookmarkCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleBookmarkCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
