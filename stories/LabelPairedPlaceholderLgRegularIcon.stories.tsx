import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPlaceholderLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPlaceholderLgRegularIcon',
  component: LabelPairedPlaceholderLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedPlaceholderLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPlaceholderLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
