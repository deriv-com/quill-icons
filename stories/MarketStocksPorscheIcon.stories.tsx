import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksPorscheIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksPorscheIcon',
  component: MarketStocksPorscheIcon,
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
} satisfies Meta<typeof MarketStocksPorscheIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksPorscheIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
