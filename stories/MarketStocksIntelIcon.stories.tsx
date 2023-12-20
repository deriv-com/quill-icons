import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksIntelIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksIntelIcon',
  component: MarketStocksIntelIcon,
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
} satisfies Meta<typeof MarketStocksIntelIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksIntelIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
