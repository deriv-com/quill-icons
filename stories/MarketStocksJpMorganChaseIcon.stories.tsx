import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksJpMorganChaseIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksJpMorganChaseIcon',
  component: MarketStocksJpMorganChaseIcon,
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
} satisfies Meta<typeof MarketStocksJpMorganChaseIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksJpMorganChaseIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
