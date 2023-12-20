import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAppleSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAppleSmIcon',
  component: LabelPairedAppleSmIcon,
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
} satisfies Meta<typeof LabelPairedAppleSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAppleSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
