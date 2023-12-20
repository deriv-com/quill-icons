import type { Meta, StoryObj } from '@storybook/react';

import { MarketDerivedStepIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketDerivedStepIcon',
  component: MarketDerivedStepIcon,
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
} satisfies Meta<typeof MarketDerivedStepIcon>;

export default meta;

type Story = StoryObj<typeof MarketDerivedStepIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
