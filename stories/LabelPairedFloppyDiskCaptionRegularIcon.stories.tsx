import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFloppyDiskCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFloppyDiskCaptionRegularIcon',
  component: LabelPairedFloppyDiskCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedFloppyDiskCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFloppyDiskCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
