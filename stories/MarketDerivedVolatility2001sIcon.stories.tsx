import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedVolatility2001sIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedVolatility2001sIcon',
  component: MarketDerivedVolatility2001sIcon,
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
} satisfies Meta<typeof MarketDerivedVolatility2001sIcon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedVolatility2001sIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
