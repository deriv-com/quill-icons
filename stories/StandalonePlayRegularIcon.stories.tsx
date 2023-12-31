import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePlayRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandalonePlayRegularIcon',
  component: StandalonePlayRegularIcon,
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
} satisfies Meta<typeof StandalonePlayRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePlayRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
