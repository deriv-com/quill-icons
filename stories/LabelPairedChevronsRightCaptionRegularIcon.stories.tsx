import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronsRightCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronsRightCaptionRegularIcon',
  component: LabelPairedChevronsRightCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedChevronsRightCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronsRightCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
