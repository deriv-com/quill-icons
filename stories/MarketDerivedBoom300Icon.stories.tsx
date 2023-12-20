import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedBoom300Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedBoom300Icon',
  component: MarketDerivedBoom300Icon,
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
} satisfies Meta<typeof MarketDerivedBoom300Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedBoom300Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
