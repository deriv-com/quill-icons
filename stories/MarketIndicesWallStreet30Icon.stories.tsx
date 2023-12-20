import type { Meta, StoryObj } from '@storybook/react';

import { MarketIndicesWallStreet30Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketIndicesWallStreet30Icon',
  component: MarketIndicesWallStreet30Icon,
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
} satisfies Meta<typeof MarketIndicesWallStreet30Icon>;

export default meta;

type Story = StoryObj<typeof MarketIndicesWallStreet30Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
