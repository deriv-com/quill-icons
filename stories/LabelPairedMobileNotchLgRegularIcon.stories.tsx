import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMobileNotchLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMobileNotchLgRegularIcon',
  component: LabelPairedMobileNotchLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedMobileNotchLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMobileNotchLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
