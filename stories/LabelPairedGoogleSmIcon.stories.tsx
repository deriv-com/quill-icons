import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGoogleSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGoogleSmIcon',
  component: LabelPairedGoogleSmIcon,
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
} satisfies Meta<typeof LabelPairedGoogleSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGoogleSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
