import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBookmarkCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBookmarkCaptionRegularIcon',
  component: LabelPairedBookmarkCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedBookmarkCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBookmarkCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
