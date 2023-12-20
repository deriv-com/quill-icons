import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFloppyDiskPenCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFloppyDiskPenCaptionBoldIcon',
  component: LabelPairedFloppyDiskPenCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedFloppyDiskPenCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFloppyDiskPenCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
