import type { Meta, StoryObj } from '@storybook/react';

import { MarketCommoditySilverusdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketCommoditySilverusdIcon',
  component: MarketCommoditySilverusdIcon,
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
} satisfies Meta<typeof MarketCommoditySilverusdIcon>;

export default meta;

type Story = StoryObj<typeof MarketCommoditySilverusdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
