import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedUbuntuLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedUbuntuLgIcon',
  component: LabelPairedUbuntuLgIcon,
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
} satisfies Meta<typeof LabelPairedUbuntuLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedUbuntuLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
