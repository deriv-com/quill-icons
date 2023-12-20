import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksAmazonIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksAmazonIcon',
  component: MarketStocksAmazonIcon,
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
} satisfies Meta<typeof MarketStocksAmazonIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksAmazonIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
