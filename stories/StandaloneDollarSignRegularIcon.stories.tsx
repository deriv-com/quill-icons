import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneDollarSignRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneDollarSignRegularIcon',
  component: StandaloneDollarSignRegularIcon,
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
} satisfies Meta<typeof StandaloneDollarSignRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneDollarSignRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
