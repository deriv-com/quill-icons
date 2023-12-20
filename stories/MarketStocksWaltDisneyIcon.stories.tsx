import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksWaltDisneyIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksWaltDisneyIcon',
  component: MarketStocksWaltDisneyIcon,
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
} satisfies Meta<typeof MarketStocksWaltDisneyIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksWaltDisneyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
