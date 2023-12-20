import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksPfizerIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksPfizerIcon',
  component: MarketStocksPfizerIcon,
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
} satisfies Meta<typeof MarketStocksPfizerIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksPfizerIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
