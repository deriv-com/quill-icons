import type { Meta, StoryObj } from '@storybook/react';

import { MarketIndicesSpain35Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketIndicesSpain35Icon',
  component: MarketIndicesSpain35Icon,
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
} satisfies Meta<typeof MarketIndicesSpain35Icon>;

export default meta;

type Story = StoryObj<typeof MarketIndicesSpain35Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
