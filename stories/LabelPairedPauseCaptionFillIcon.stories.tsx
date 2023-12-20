import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPauseCaptionFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPauseCaptionFillIcon',
  component: LabelPairedPauseCaptionFillIcon,
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
} satisfies Meta<typeof LabelPairedPauseCaptionFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPauseCaptionFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
