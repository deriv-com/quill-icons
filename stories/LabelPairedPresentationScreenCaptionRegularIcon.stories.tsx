import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPresentationScreenCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPresentationScreenCaptionRegularIcon',
  component: LabelPairedPresentationScreenCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedPresentationScreenCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPresentationScreenCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
