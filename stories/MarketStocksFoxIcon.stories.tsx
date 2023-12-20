import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksFoxIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksFoxIcon',
  component: MarketStocksFoxIcon,
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
} satisfies Meta<typeof MarketStocksFoxIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksFoxIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
