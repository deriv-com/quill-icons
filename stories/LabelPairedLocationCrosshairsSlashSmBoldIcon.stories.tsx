import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsSlashSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsSlashSmBoldIcon',
  component: LabelPairedLocationCrosshairsSlashSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsSlashSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsSlashSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
