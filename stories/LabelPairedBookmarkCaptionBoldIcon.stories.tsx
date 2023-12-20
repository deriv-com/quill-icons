import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBookmarkCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBookmarkCaptionBoldIcon',
  component: LabelPairedBookmarkCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedBookmarkCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBookmarkCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
