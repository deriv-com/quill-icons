import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksCiscoIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksCiscoIcon',
  component: MarketStocksCiscoIcon,
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
} satisfies Meta<typeof MarketStocksCiscoIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksCiscoIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
