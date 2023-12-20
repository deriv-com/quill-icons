import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksTeslaIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksTeslaIcon',
  component: MarketStocksTeslaIcon,
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
} satisfies Meta<typeof MarketStocksTeslaIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksTeslaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
