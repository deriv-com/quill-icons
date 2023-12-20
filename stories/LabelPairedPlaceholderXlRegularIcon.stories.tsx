import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPlaceholderXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPlaceholderXlRegularIcon',
  component: LabelPairedPlaceholderXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedPlaceholderXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPlaceholderXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
