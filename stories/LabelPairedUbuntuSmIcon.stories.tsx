import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedUbuntuSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedUbuntuSmIcon',
  component: LabelPairedUbuntuSmIcon,
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
} satisfies Meta<typeof LabelPairedUbuntuSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedUbuntuSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
