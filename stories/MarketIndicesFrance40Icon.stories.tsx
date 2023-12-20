import type { Meta, StoryObj } from '@storybook/react';

import { MarketIndicesFrance40Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketIndicesFrance40Icon',
  component: MarketIndicesFrance40Icon,
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
} satisfies Meta<typeof MarketIndicesFrance40Icon>;

export default meta;

type Story = StoryObj<typeof MarketIndicesFrance40Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
