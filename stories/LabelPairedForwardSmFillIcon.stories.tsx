import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedForwardSmFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedForwardSmFillIcon',
  component: LabelPairedForwardSmFillIcon,
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
} satisfies Meta<typeof LabelPairedForwardSmFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedForwardSmFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
