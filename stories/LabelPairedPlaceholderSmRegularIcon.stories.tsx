import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPlaceholderSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPlaceholderSmRegularIcon',
  component: LabelPairedPlaceholderSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedPlaceholderSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPlaceholderSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
