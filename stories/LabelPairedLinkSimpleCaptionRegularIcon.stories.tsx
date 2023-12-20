import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinkSimpleCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinkSimpleCaptionRegularIcon',
  component: LabelPairedLinkSimpleCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedLinkSimpleCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinkSimpleCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
