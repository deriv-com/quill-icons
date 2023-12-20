import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFiatOfframpSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFiatOfframpSmRegularIcon',
  component: LabelPairedFiatOfframpSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedFiatOfframpSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFiatOfframpSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
