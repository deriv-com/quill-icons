import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFlagCheckeredCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFlagCheckeredCaptionRegularIcon',
  component: LabelPairedFlagCheckeredCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedFlagCheckeredCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFlagCheckeredCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
