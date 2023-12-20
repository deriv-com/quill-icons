import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedJump25Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedJump25Icon',
  component: MarketDerivedJump25Icon,
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
} satisfies Meta<typeof MarketDerivedJump25Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedJump25Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
