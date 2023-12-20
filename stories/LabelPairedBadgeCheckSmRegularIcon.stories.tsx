import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBadgeCheckSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBadgeCheckSmRegularIcon',
  component: LabelPairedBadgeCheckSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedBadgeCheckSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBadgeCheckSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
