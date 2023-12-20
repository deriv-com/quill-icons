import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBarsCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBarsCaptionBoldIcon',
  component: LabelPairedBarsCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedBarsCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBarsCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
