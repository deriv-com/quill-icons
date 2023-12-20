import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksEbayIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksEbayIcon',
  component: MarketStocksEbayIcon,
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
} satisfies Meta<typeof MarketStocksEbayIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksEbayIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
