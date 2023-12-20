import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedVolatility1501sIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedVolatility1501sIcon',
  component: MarketDerivedVolatility1501sIcon,
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
} satisfies Meta<typeof MarketDerivedVolatility1501sIcon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedVolatility1501sIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
