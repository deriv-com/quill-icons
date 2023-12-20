import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFiatOfframpLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFiatOfframpLgRegularIcon',
  component: LabelPairedFiatOfframpLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedFiatOfframpLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFiatOfframpLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
