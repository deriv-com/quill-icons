import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksAirFranceIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksAirFranceIcon',
  component: MarketStocksAirFranceIcon,
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
} satisfies Meta<typeof MarketStocksAirFranceIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksAirFranceIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
