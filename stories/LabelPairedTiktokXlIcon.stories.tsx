import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTiktokXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTiktokXlIcon',
  component: LabelPairedTiktokXlIcon,
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
} satisfies Meta<typeof LabelPairedTiktokXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTiktokXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
