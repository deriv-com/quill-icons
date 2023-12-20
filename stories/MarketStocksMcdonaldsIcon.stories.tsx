import type { Meta, StoryObj } from '@storybook/react';

import { MarketStocksMcdonaldsIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketStocksMcdonaldsIcon',
  component: MarketStocksMcdonaldsIcon,
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
} satisfies Meta<typeof MarketStocksMcdonaldsIcon>;

export default meta;

type Story = StoryObj<typeof MarketStocksMcdonaldsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
