import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPlayCaptionFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPlayCaptionFillIcon',
  component: LabelPairedPlayCaptionFillIcon,
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
} satisfies Meta<typeof LabelPairedPlayCaptionFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPlayCaptionFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
