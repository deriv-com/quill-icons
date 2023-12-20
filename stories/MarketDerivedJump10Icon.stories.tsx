import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedJump10Icon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedJump10Icon',
  component: MarketDerivedJump10Icon,
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
} satisfies Meta<typeof MarketDerivedJump10Icon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedJump10Icon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
