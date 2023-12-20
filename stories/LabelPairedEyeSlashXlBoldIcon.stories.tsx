import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEyeSlashXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEyeSlashXlBoldIcon',
  component: LabelPairedEyeSlashXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedEyeSlashXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEyeSlashXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
