import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowRightToLineBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowRightToLineBoldIcon',
  component: StandaloneArrowRightToLineBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowRightToLineBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowRightToLineBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
