import type { Meta, StoryObj } from '@storybook/react';

import { MarketIndicesNetherlands25Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketIndicesNetherlands25Icon',
  component: MarketIndicesNetherlands25Icon,
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
} satisfies Meta<typeof MarketIndicesNetherlands25Icon>;

export default meta;

type Story = StoryObj<typeof MarketIndicesNetherlands25Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
