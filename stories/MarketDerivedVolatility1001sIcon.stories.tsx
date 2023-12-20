import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedVolatility1001sIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedVolatility1001sIcon',
  component: MarketDerivedVolatility1001sIcon,
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
} satisfies Meta<typeof MarketDerivedVolatility1001sIcon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedVolatility1001sIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
