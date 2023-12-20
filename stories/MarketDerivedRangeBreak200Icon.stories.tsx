import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedRangeBreak200Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedRangeBreak200Icon',
  component: MarketDerivedRangeBreak200Icon,
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
} satisfies Meta<typeof MarketDerivedRangeBreak200Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedRangeBreak200Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
