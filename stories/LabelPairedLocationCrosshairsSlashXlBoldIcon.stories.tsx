import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsSlashXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsSlashXlBoldIcon',
  component: LabelPairedLocationCrosshairsSlashXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsSlashXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsSlashXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
