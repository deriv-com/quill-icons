import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedJump200Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedJump200Icon',
  component: MarketDerivedJump200Icon,
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
} satisfies Meta<typeof MarketDerivedJump200Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedJump200Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
