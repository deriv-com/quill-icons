import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexEurplnIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexEurplnIcon',
  component: MarketForexEurplnIcon,
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
} satisfies Meta<typeof MarketForexEurplnIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexEurplnIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
