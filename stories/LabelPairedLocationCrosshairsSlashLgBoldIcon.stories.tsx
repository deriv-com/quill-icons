import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsSlashLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsSlashLgBoldIcon',
  component: LabelPairedLocationCrosshairsSlashLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsSlashLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsSlashLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
