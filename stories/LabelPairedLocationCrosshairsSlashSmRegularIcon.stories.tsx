import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsSlashSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsSlashSmRegularIcon',
  component: LabelPairedLocationCrosshairsSlashSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsSlashSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsSlashSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
