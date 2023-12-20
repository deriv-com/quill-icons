import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTiktokSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTiktokSmIcon',
  component: LabelPairedTiktokSmIcon,
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
} satisfies Meta<typeof LabelPairedTiktokSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTiktokSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
