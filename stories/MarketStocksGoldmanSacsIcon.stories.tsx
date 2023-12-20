import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksGoldmanSacsIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksGoldmanSacsIcon',
  component: MarketStocksGoldmanSacsIcon,
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
} satisfies Meta<typeof MarketStocksGoldmanSacsIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksGoldmanSacsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
