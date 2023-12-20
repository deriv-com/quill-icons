import type { Meta, StoryObj } from '@storybook/react';

import { MarketIndicesUsTech100Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketIndicesUsTech100Icon',
  component: MarketIndicesUsTech100Icon,
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
} satisfies Meta<typeof MarketIndicesUsTech100Icon>;

export default meta;

type Story = StoryObj<typeof MarketIndicesUsTech100Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
