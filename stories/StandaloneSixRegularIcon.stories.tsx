import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneSixRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneSixRegularIcon',
  component: StandaloneSixRegularIcon,
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
} satisfies Meta<typeof StandaloneSixRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneSixRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
