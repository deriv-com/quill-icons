import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAndroidSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAndroidSmIcon',
  component: LabelPairedAndroidSmIcon,
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
} satisfies Meta<typeof LabelPairedAndroidSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAndroidSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
