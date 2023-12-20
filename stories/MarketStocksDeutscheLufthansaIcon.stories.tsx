import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksDeutscheLufthansaIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksDeutscheLufthansaIcon',
  component: MarketStocksDeutscheLufthansaIcon,
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
} satisfies Meta<typeof MarketStocksDeutscheLufthansaIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksDeutscheLufthansaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
