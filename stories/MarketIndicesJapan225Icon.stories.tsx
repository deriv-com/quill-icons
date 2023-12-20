import type { Meta, StoryObj } from '@storybook/react';

import { MarketIndicesJapan225Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketIndicesJapan225Icon',
  component: MarketIndicesJapan225Icon,
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
} satisfies Meta<typeof MarketIndicesJapan225Icon>;

export default meta;

type Story = StoryObj<typeof MarketIndicesJapan225Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
