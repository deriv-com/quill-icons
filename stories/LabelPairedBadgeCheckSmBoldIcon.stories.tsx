import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBadgeCheckSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBadgeCheckSmBoldIcon',
  component: LabelPairedBadgeCheckSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedBadgeCheckSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBadgeCheckSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
