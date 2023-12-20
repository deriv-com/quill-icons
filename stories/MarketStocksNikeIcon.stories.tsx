import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksNikeIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksNikeIcon',
  component: MarketStocksNikeIcon,
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
} satisfies Meta<typeof MarketStocksNikeIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksNikeIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
