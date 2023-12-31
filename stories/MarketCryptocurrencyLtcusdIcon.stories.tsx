import type { Meta, StoryObj } from '@storybook/react';

import { MarketCryptocurrencyLtcusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCryptocurrencyLtcusdIcon',
  component: MarketCryptocurrencyLtcusdIcon,
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
} satisfies Meta<typeof MarketCryptocurrencyLtcusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCryptocurrencyLtcusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
