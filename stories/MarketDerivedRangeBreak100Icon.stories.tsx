import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedRangeBreak100Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedRangeBreak100Icon',
  component: MarketDerivedRangeBreak100Icon,
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
} satisfies Meta<typeof MarketDerivedRangeBreak100Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedRangeBreak100Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
