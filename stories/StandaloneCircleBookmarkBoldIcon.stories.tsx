import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleBookmarkBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleBookmarkBoldIcon',
  component: StandaloneCircleBookmarkBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleBookmarkBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleBookmarkBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
