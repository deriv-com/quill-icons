import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromBracketCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromBracketCaptionBoldIcon',
  component: LabelPairedArrowUpFromBracketCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromBracketCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromBracketCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
