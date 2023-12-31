import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexNzdsgdIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexNzdsgdIcon',
  component: MarketForexNzdsgdIcon,
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
} satisfies Meta<typeof MarketForexNzdsgdIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexNzdsgdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
