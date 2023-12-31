import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleArrowUpRightBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleArrowUpRightBoldIcon',
  component: StandaloneCircleArrowUpRightBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleArrowUpRightBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleArrowUpRightBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
