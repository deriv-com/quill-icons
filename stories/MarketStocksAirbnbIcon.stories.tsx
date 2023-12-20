import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksAirbnbIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksAirbnbIcon',
  component: MarketStocksAirbnbIcon,
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
} satisfies Meta<typeof MarketStocksAirbnbIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksAirbnbIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
