import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrosoftStoreCaptionIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrosoftStoreCaptionIcon',
  component: LabelPairedMicrosoftStoreCaptionIcon,
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
} satisfies Meta<typeof LabelPairedMicrosoftStoreCaptionIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrosoftStoreCaptionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
