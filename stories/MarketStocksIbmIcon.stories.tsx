import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksIbmIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksIbmIcon',
  component: MarketStocksIbmIcon,
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
} satisfies Meta<typeof MarketStocksIbmIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksIbmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
