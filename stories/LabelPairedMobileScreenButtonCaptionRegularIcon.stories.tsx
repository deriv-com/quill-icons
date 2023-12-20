import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMobileScreenButtonCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMobileScreenButtonCaptionRegularIcon',
  component: LabelPairedMobileScreenButtonCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedMobileScreenButtonCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMobileScreenButtonCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
