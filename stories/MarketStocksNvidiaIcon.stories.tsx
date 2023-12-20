import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksNvidiaIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksNvidiaIcon',
  component: MarketStocksNvidiaIcon,
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
} satisfies Meta<typeof MarketStocksNvidiaIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksNvidiaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
