import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBellOnRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneBellOnRegularIcon',
  component: StandaloneBellOnRegularIcon,
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
} satisfies Meta<typeof StandaloneBellOnRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBellOnRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
