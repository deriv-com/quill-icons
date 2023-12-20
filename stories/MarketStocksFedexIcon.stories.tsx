import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksFedexIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksFedexIcon',
  component: MarketStocksFedexIcon,
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
} satisfies Meta<typeof MarketStocksFedexIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksFedexIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
