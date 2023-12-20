import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronsLeftCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronsLeftCaptionBoldIcon',
  component: LabelPairedChevronsLeftCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedChevronsLeftCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronsLeftCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
