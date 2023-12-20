import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedJump75Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedJump75Icon',
  component: MarketDerivedJump75Icon,
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
} satisfies Meta<typeof MarketDerivedJump75Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedJump75Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
