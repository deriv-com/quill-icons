import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronRightCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronRightCaptionRegularIcon',
  component: LabelPairedCircleChevronRightCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronRightCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronRightCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
