import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMobileNotchLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMobileNotchLgBoldIcon',
  component: LabelPairedMobileNotchLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedMobileNotchLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMobileNotchLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
