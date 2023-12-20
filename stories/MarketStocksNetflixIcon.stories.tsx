import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksNetflixIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksNetflixIcon',
  component: MarketStocksNetflixIcon,
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
} satisfies Meta<typeof MarketStocksNetflixIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksNetflixIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
