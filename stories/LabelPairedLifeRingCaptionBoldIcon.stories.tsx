import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLifeRingCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLifeRingCaptionBoldIcon',
  component: LabelPairedLifeRingCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedLifeRingCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLifeRingCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
