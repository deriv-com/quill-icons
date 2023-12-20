import type { Meta, StoryObj } from '@storybook/react';

import { MarketIndicesAustralia200Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketIndicesAustralia200Icon',
  component: MarketIndicesAustralia200Icon,
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
} satisfies Meta<typeof MarketIndicesAustralia200Icon>;

export default meta;

type Story = StoryObj<typeof MarketIndicesAustralia200Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
