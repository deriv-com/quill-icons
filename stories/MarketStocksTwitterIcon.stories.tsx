import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksTwitterIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksTwitterIcon',
  component: MarketStocksTwitterIcon,
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
} satisfies Meta<typeof MarketStocksTwitterIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksTwitterIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
