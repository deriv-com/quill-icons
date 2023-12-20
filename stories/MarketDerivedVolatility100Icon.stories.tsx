import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedVolatility100Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedVolatility100Icon',
  component: MarketDerivedVolatility100Icon,
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
} satisfies Meta<typeof MarketDerivedVolatility100Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedVolatility100Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
