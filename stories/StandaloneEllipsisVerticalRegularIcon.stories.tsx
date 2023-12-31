import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneEllipsisVerticalRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneEllipsisVerticalRegularIcon',
  component: StandaloneEllipsisVerticalRegularIcon,
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
} satisfies Meta<typeof StandaloneEllipsisVerticalRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneEllipsisVerticalRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
