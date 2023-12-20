import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFiatOfframpXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFiatOfframpXlRegularIcon',
  component: LabelPairedFiatOfframpXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedFiatOfframpXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFiatOfframpXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
