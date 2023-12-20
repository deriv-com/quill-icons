import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksAmericanInternationalGroupIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksAmericanInternationalGroupIcon',
  component: MarketStocksAmericanInternationalGroupIcon,
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
} satisfies Meta<typeof MarketStocksAmericanInternationalGroupIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksAmericanInternationalGroupIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
