import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleXmarkCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleXmarkCaptionBoldIcon',
  component: LabelPairedCircleXmarkCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleXmarkCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleXmarkCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
