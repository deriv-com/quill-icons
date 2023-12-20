import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksMastercardIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksMastercardIcon',
  component: MarketStocksMastercardIcon,
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
} satisfies Meta<typeof MarketStocksMastercardIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksMastercardIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
