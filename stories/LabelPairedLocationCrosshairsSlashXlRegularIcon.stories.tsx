import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsSlashXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsSlashXlRegularIcon',
  component: LabelPairedLocationCrosshairsSlashXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsSlashXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsSlashXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
