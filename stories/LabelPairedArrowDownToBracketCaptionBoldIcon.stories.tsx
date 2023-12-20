import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownToBracketCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownToBracketCaptionBoldIcon',
  component: LabelPairedArrowDownToBracketCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownToBracketCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownToBracketCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
