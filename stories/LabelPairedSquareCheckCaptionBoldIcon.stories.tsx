import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareCheckCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareCheckCaptionBoldIcon',
  component: LabelPairedSquareCheckCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedSquareCheckCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareCheckCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
