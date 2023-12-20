import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksAdidasSalomonIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksAdidasSalomonIcon',
  component: MarketStocksAdidasSalomonIcon,
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
} satisfies Meta<typeof MarketStocksAdidasSalomonIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksAdidasSalomonIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
