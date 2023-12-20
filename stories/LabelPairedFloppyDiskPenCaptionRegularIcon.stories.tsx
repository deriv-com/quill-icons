import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFloppyDiskPenCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFloppyDiskPenCaptionRegularIcon',
  component: LabelPairedFloppyDiskPenCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedFloppyDiskPenCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFloppyDiskPenCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
