import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEyeSlashCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEyeSlashCaptionBoldIcon',
  component: LabelPairedEyeSlashCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedEyeSlashCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEyeSlashCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
