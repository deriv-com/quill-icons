import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksTevaIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksTevaIcon',
  component: MarketStocksTevaIcon,
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
} satisfies Meta<typeof MarketStocksTevaIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksTevaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
