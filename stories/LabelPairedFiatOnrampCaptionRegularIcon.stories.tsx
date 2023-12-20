import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFiatOnrampCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFiatOnrampCaptionRegularIcon',
  component: LabelPairedFiatOnrampCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedFiatOnrampCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFiatOnrampCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
