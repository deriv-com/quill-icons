import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePresentationScreenBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandalonePresentationScreenBoldIcon',
  component: StandalonePresentationScreenBoldIcon,
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
} satisfies Meta<typeof StandalonePresentationScreenBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePresentationScreenBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
