import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedJump100Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedJump100Icon',
  component: MarketDerivedJump100Icon,
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
} satisfies Meta<typeof MarketDerivedJump100Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedJump100Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
