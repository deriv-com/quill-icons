import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleCheckCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleCheckCaptionBoldIcon',
  component: LabelPairedFileCircleCheckCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleCheckCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleCheckCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
