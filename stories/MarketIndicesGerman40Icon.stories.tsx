import type { Meta, StoryObj } from '@storybook/react';

import { MarketIndicesGerman40Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketIndicesGerman40Icon',
  component: MarketIndicesGerman40Icon,
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
} satisfies Meta<typeof MarketIndicesGerman40Icon>;

export default meta;

type Story = StoryObj<typeof MarketIndicesGerman40Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
