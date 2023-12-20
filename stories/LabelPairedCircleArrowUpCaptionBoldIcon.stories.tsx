import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowUpCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowUpCaptionBoldIcon',
  component: LabelPairedCircleArrowUpCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowUpCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowUpCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
