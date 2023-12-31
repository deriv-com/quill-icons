import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowUpOneNineBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowUpOneNineBoldIcon',
  component: StandaloneArrowUpOneNineBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowUpOneNineBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowUpOneNineBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
