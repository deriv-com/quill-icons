import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksAmericanAirlinesIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksAmericanAirlinesIcon',
  component: MarketStocksAmericanAirlinesIcon,
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
} satisfies Meta<typeof MarketStocksAmericanAirlinesIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksAmericanAirlinesIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
