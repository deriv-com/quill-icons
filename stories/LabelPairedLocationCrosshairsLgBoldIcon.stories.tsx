import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLocationCrosshairsLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLocationCrosshairsLgBoldIcon',
  component: LabelPairedLocationCrosshairsLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedLocationCrosshairsLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLocationCrosshairsLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
