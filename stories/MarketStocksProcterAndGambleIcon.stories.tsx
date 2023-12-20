import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksProcterAndGambleIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksProcterAndGambleIcon',
  component: MarketStocksProcterAndGambleIcon,
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
} satisfies Meta<typeof MarketStocksProcterAndGambleIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksProcterAndGambleIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
