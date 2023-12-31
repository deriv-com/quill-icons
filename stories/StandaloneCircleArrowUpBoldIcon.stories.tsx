import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleArrowUpBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleArrowUpBoldIcon',
  component: StandaloneCircleArrowUpBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleArrowUpBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleArrowUpBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
