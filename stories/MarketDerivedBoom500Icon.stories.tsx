import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedBoom500Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedBoom500Icon',
  component: MarketDerivedBoom500Icon,
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
} satisfies Meta<typeof MarketDerivedBoom500Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedBoom500Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
