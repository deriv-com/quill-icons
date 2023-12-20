import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksBoeingIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksBoeingIcon',
  component: MarketStocksBoeingIcon,
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
} satisfies Meta<typeof MarketStocksBoeingIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksBoeingIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
