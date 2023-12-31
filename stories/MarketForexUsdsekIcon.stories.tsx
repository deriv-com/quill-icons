import type { Meta, StoryObj } from '@storybook/react';

import { MarketForexUsdsekIcon } from '../src/react/Markets';

const meta = {
  title: 'markets/MarketForexUsdsekIcon',
  component: MarketForexUsdsekIcon,
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
} satisfies Meta<typeof MarketForexUsdsekIcon>;

export default meta;

type Story = StoryObj<typeof MarketForexUsdsekIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
