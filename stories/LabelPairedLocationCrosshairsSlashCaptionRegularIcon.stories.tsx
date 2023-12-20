import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsSlashCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsSlashCaptionRegularIcon',
  component: LabelPairedLocationCrosshairsSlashCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsSlashCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsSlashCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
