import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLinkedinSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLinkedinSmIcon',
  component: LabelPairedLinkedinSmIcon,
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
} satisfies Meta<typeof LabelPairedLinkedinSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLinkedinSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
