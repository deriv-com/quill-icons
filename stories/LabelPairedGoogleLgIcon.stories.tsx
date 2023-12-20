import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGoogleLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGoogleLgIcon',
  component: LabelPairedGoogleLgIcon,
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
} satisfies Meta<typeof LabelPairedGoogleLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGoogleLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
