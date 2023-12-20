import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksPepsicoIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksPepsicoIcon',
  component: MarketStocksPepsicoIcon,
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
} satisfies Meta<typeof MarketStocksPepsicoIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksPepsicoIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
