import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPresentationScreenCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPresentationScreenCaptionBoldIcon',
  component: LabelPairedPresentationScreenCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedPresentationScreenCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPresentationScreenCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
