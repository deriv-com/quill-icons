import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsSlashCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsSlashCaptionBoldIcon',
  component: LabelPairedLocationCrosshairsSlashCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsSlashCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsSlashCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
