import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGooglePlaySmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGooglePlaySmIcon',
  component: LabelPairedGooglePlaySmIcon,
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
} satisfies Meta<typeof LabelPairedGooglePlaySmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGooglePlaySmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
