import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksCocacolaIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksCocacolaIcon',
  component: MarketStocksCocacolaIcon,
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
} satisfies Meta<typeof MarketStocksCocacolaIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksCocacolaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
