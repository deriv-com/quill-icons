import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedVolatility101sIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedVolatility101sIcon',
  component: MarketDerivedVolatility101sIcon,
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
} satisfies Meta<typeof MarketDerivedVolatility101sIcon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedVolatility101sIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
