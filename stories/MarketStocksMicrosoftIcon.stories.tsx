import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksMicrosoftIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksMicrosoftIcon',
  component: MarketStocksMicrosoftIcon,
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
} satisfies Meta<typeof MarketStocksMicrosoftIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksMicrosoftIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
