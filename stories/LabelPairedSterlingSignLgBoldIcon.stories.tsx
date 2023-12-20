import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSterlingSignLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSterlingSignLgBoldIcon',
  component: LabelPairedSterlingSignLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedSterlingSignLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSterlingSignLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
