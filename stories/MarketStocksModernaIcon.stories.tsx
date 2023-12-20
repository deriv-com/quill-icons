import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksModernaIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksModernaIcon',
  component: MarketStocksModernaIcon,
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
} satisfies Meta<typeof MarketStocksModernaIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksModernaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
