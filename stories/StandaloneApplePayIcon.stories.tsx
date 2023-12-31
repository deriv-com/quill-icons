import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneApplePayIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneApplePayIcon',
  component: StandaloneApplePayIcon,
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
} satisfies Meta<typeof StandaloneApplePayIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneApplePayIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
