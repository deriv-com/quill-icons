import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksSonyIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksSonyIcon',
  component: MarketStocksSonyIcon,
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
} satisfies Meta<typeof MarketStocksSonyIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksSonyIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
