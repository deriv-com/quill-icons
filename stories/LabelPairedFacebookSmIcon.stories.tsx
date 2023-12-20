import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFacebookSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFacebookSmIcon',
  component: LabelPairedFacebookSmIcon,
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
} satisfies Meta<typeof LabelPairedFacebookSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFacebookSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
