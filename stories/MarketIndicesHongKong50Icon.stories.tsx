import type { Meta, StoryObj } from '@storybook/react';

import { MarketIndicesHongKong50Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketIndicesHongKong50Icon',
  component: MarketIndicesHongKong50Icon,
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
} satisfies Meta<typeof MarketIndicesHongKong50Icon>;

export default meta;

type Story = StoryObj<typeof MarketIndicesHongKong50Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
