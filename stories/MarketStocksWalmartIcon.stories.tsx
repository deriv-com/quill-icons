import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksWalmartIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksWalmartIcon',
  component: MarketStocksWalmartIcon,
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
} satisfies Meta<typeof MarketStocksWalmartIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksWalmartIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
