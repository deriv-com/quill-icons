import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedScissorsLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedScissorsLgRegularIcon',
  component: LabelPairedScissorsLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedScissorsLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedScissorsLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
