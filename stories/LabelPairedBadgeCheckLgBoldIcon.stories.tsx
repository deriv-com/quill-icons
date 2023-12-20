import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBadgeCheckLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBadgeCheckLgBoldIcon',
  component: LabelPairedBadgeCheckLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedBadgeCheckLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBadgeCheckLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
