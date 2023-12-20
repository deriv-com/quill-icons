import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPenCircleCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPenCircleCaptionRegularIcon',
  component: LabelPairedPenCircleCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedPenCircleCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPenCircleCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
