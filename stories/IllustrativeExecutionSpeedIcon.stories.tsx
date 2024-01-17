import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeExecutionSpeedIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeExecutionSpeedIcon',
  component: IllustrativeExecutionSpeedIcon,
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
} satisfies Meta<typeof IllustrativeExecutionSpeedIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeExecutionSpeedIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};