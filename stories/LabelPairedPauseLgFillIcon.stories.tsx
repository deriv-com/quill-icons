import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPauseLgFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPauseLgFillIcon',
  component: LabelPairedPauseLgFillIcon,
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
} satisfies Meta<typeof LabelPairedPauseLgFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPauseLgFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
