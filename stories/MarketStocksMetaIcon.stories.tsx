import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksMetaIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksMetaIcon',
  component: MarketStocksMetaIcon,
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
} satisfies Meta<typeof MarketStocksMetaIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksMetaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
