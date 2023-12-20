import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrosoftCaptionIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrosoftCaptionIcon',
  component: LabelPairedMicrosoftCaptionIcon,
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
} satisfies Meta<typeof LabelPairedMicrosoftCaptionIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrosoftCaptionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
