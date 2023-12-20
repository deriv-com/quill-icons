import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowLeftCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowLeftCaptionRegularIcon',
  component: LabelPairedCircleArrowLeftCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowLeftCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowLeftCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
