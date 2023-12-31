import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTakeProfitRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTakeProfitRegularIcon',
  component: StandaloneTakeProfitRegularIcon,
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
} satisfies Meta<typeof StandaloneTakeProfitRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTakeProfitRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
