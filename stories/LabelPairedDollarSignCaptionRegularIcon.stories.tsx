import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDollarSignCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDollarSignCaptionRegularIcon',
  component: LabelPairedDollarSignCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedDollarSignCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDollarSignCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
