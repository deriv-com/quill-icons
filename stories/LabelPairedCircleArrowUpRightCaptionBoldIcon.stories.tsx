import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowUpRightCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowUpRightCaptionBoldIcon',
  component: LabelPairedCircleArrowUpRightCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowUpRightCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowUpRightCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
