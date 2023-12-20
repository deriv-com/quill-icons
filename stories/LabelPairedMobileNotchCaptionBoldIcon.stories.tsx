import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMobileNotchCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMobileNotchCaptionBoldIcon',
  component: LabelPairedMobileNotchCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedMobileNotchCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMobileNotchCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
