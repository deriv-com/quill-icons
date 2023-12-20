import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBadgeCheckXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBadgeCheckXlBoldIcon',
  component: LabelPairedBadgeCheckXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedBadgeCheckXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBadgeCheckXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
