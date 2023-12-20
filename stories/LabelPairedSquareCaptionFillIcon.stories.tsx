import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSquareCaptionFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSquareCaptionFillIcon',
  component: LabelPairedSquareCaptionFillIcon,
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
} satisfies Meta<typeof LabelPairedSquareCaptionFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSquareCaptionFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
