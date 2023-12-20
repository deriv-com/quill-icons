import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEllipsisVerticalCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEllipsisVerticalCaptionBoldIcon',
  component: LabelPairedEllipsisVerticalCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedEllipsisVerticalCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEllipsisVerticalCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
