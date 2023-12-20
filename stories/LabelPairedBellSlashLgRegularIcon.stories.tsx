import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBellSlashLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBellSlashLgRegularIcon',
  component: LabelPairedBellSlashLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedBellSlashLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBellSlashLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
