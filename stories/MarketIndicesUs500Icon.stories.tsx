import type { Meta, StoryObj } from '@storybook/react';

import { MarketIndicesUs500Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketIndicesUs500Icon',
  component: MarketIndicesUs500Icon,
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
} satisfies Meta<typeof MarketIndicesUs500Icon>;

export default meta;

type Story = StoryObj<typeof MarketIndicesUs500Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
