import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneAndroidIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneAndroidIcon',
  component: StandaloneAndroidIcon,
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
} satisfies Meta<typeof StandaloneAndroidIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneAndroidIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
