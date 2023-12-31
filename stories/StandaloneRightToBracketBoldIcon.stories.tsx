import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneRightToBracketBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneRightToBracketBoldIcon',
  component: StandaloneRightToBracketBoldIcon,
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
} satisfies Meta<typeof StandaloneRightToBracketBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneRightToBracketBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
