import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedForwardLgFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedForwardLgFillIcon',
  component: LabelPairedForwardLgFillIcon,
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
} satisfies Meta<typeof LabelPairedForwardLgFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedForwardLgFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
