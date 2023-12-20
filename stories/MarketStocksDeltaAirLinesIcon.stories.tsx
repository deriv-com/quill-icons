import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksDeltaAirLinesIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksDeltaAirLinesIcon',
  component: MarketStocksDeltaAirLinesIcon,
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
} satisfies Meta<typeof MarketStocksDeltaAirLinesIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksDeltaAirLinesIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
