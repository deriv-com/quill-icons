import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGooglePlayLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGooglePlayLgIcon',
  component: LabelPairedGooglePlayLgIcon,
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
} satisfies Meta<typeof LabelPairedGooglePlayLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGooglePlayLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
