import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedSterlingSignLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedSterlingSignLgRegularIcon',
  component: LabelPairedSterlingSignLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedSterlingSignLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedSterlingSignLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
