import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEyeSlashLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEyeSlashLgRegularIcon',
  component: LabelPairedEyeSlashLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedEyeSlashLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEyeSlashLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
