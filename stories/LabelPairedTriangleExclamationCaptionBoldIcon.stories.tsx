import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTriangleExclamationCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTriangleExclamationCaptionBoldIcon',
  component: LabelPairedTriangleExclamationCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedTriangleExclamationCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTriangleExclamationCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
