import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMobileScreenButtonSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMobileScreenButtonSmRegularIcon',
  component: LabelPairedMobileScreenButtonSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedMobileScreenButtonSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMobileScreenButtonSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
