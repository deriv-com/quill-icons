import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedCrash1000Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedCrash1000Icon',
  component: MarketDerivedCrash1000Icon,
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
} satisfies Meta<typeof MarketDerivedCrash1000Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedCrash1000Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
