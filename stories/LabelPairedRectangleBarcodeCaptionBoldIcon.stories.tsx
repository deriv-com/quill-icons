import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRectangleBarcodeCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRectangleBarcodeCaptionBoldIcon',
  component: LabelPairedRectangleBarcodeCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedRectangleBarcodeCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRectangleBarcodeCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
