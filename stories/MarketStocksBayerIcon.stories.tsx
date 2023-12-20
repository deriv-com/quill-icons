import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksBayerIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksBayerIcon',
  component: MarketStocksBayerIcon,
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
} satisfies Meta<typeof MarketStocksBayerIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksBayerIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
