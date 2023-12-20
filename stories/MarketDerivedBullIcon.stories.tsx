import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedBullIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedBullIcon',
  component: MarketDerivedBullIcon,
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
} satisfies Meta<typeof MarketDerivedBullIcon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedBullIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
