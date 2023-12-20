import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedVolatility10Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedVolatility10Icon',
  component: MarketDerivedVolatility10Icon,
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
} satisfies Meta<typeof MarketDerivedVolatility10Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedVolatility10Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
