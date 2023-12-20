import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksNestleIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksNestleIcon',
  component: MarketStocksNestleIcon,
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
} satisfies Meta<typeof MarketStocksNestleIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksNestleIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
