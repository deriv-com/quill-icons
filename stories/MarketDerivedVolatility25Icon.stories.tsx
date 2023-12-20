import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedVolatility25Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedVolatility25Icon',
  component: MarketDerivedVolatility25Icon,
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
} satisfies Meta<typeof MarketDerivedVolatility25Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedVolatility25Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
