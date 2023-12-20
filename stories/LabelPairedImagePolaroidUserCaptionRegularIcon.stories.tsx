import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedImagePolaroidUserCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedImagePolaroidUserCaptionRegularIcon',
  component: LabelPairedImagePolaroidUserCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedImagePolaroidUserCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedImagePolaroidUserCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
