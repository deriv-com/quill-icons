import type { Meta, StoryObj } from '@storybook/react';

import { MarketMetalPalladiumIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketMetalPalladiumIcon',
  component: MarketMetalPalladiumIcon,
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
} satisfies Meta<typeof MarketMetalPalladiumIcon>;

export default meta;

type Story = StoryObj<typeof MarketMetalPalladiumIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
