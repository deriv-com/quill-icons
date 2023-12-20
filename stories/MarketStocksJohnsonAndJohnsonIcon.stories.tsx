import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksJohnsonAndJohnsonIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksJohnsonAndJohnsonIcon',
  component: MarketStocksJohnsonAndJohnsonIcon,
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
} satisfies Meta<typeof MarketStocksJohnsonAndJohnsonIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksJohnsonAndJohnsonIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
