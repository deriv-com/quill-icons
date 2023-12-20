import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEuroSignCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEuroSignCaptionRegularIcon',
  component: LabelPairedEuroSignCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedEuroSignCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEuroSignCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
