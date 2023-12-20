import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGooglePlayCaptionIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGooglePlayCaptionIcon',
  component: LabelPairedGooglePlayCaptionIcon,
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
} satisfies Meta<typeof LabelPairedGooglePlayCaptionIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGooglePlayCaptionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
