import type { Meta, StoryObj } from '@storybook/react';

import { CurrencyZecIcon } from '../src/react/Currencies';

const meta = {
  title: 'currencies/CurrencyZecIcon',
  component: CurrencyZecIcon,
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
} satisfies Meta<typeof CurrencyZecIcon>;

export default meta;

type Story = StoryObj<typeof CurrencyZecIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};