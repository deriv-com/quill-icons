import type { Meta, StoryObj } from '@storybook/react';

import { MarketIndicesEuro50Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketIndicesEuro50Icon',
  component: MarketIndicesEuro50Icon,
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
} satisfies Meta<typeof MarketIndicesEuro50Icon>;

export default meta;

type Story = StoryObj<typeof MarketIndicesEuro50Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
