import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMobileNotchSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMobileNotchSmBoldIcon',
  component: LabelPairedMobileNotchSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedMobileNotchSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMobileNotchSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
