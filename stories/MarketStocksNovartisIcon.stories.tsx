import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksNovartisIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksNovartisIcon',
  component: MarketStocksNovartisIcon,
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
} satisfies Meta<typeof MarketStocksNovartisIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksNovartisIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
