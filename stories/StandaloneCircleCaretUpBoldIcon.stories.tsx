import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneCircleCaretUpBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneCircleCaretUpBoldIcon',
  component: StandaloneCircleCaretUpBoldIcon,
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
} satisfies Meta<typeof StandaloneCircleCaretUpBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneCircleCaretUpBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
