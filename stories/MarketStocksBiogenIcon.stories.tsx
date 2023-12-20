import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksBiogenIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksBiogenIcon',
  component: MarketStocksBiogenIcon,
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
} satisfies Meta<typeof MarketStocksBiogenIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksBiogenIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
