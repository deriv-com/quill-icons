import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksAlphabetIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksAlphabetIcon',
  component: MarketStocksAlphabetIcon,
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
} satisfies Meta<typeof MarketStocksAlphabetIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksAlphabetIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
