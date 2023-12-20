import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksPumaIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksPumaIcon',
  component: MarketStocksPumaIcon,
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
} satisfies Meta<typeof MarketStocksPumaIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksPumaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
