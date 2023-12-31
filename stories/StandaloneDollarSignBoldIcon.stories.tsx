import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneDollarSignBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneDollarSignBoldIcon',
  component: StandaloneDollarSignBoldIcon,
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
} satisfies Meta<typeof StandaloneDollarSignBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneDollarSignBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
