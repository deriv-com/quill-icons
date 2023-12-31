import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBackwardRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneBackwardRegularIcon',
  component: StandaloneBackwardRegularIcon,
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
} satisfies Meta<typeof StandaloneBackwardRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBackwardRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
