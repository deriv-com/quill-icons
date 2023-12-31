import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleEightRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleEightRegularIcon',
  component: StandaloneCircleEightRegularIcon,
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
} satisfies Meta<typeof StandaloneCircleEightRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleEightRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
