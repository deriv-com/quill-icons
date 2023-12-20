import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBadgeCheckXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBadgeCheckXlRegularIcon',
  component: LabelPairedBadgeCheckXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedBadgeCheckXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBadgeCheckXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
