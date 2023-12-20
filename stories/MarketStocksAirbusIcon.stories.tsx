import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksAirbusIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksAirbusIcon',
  component: MarketStocksAirbusIcon,
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
} satisfies Meta<typeof MarketStocksAirbusIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksAirbusIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
