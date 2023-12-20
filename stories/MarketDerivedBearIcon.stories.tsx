import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedBearIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedBearIcon',
  component: MarketDerivedBearIcon,
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
} satisfies Meta<typeof MarketDerivedBearIcon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedBearIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
