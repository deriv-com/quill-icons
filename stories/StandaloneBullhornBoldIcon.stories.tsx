import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneBullhornBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneBullhornBoldIcon',
  component: StandaloneBullhornBoldIcon,
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
} satisfies Meta<typeof StandaloneBullhornBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneBullhornBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
