import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedVolatility75Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedVolatility75Icon',
  component: MarketDerivedVolatility75Icon,
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
} satisfies Meta<typeof MarketDerivedVolatility75Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedVolatility75Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
