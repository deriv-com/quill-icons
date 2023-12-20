import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksBmwIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksBmwIcon',
  component: MarketStocksBmwIcon,
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
} satisfies Meta<typeof MarketStocksBmwIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksBmwIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
