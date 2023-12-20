import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedImagePolaroidUserCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedImagePolaroidUserCaptionBoldIcon',
  component: LabelPairedImagePolaroidUserCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedImagePolaroidUserCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedImagePolaroidUserCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
