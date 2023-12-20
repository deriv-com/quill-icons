import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFacebookLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFacebookLgIcon',
  component: LabelPairedFacebookLgIcon,
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
} satisfies Meta<typeof LabelPairedFacebookLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFacebookLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
