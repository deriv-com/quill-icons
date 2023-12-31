import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneThreeRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneThreeRegularIcon',
  component: StandaloneThreeRegularIcon,
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
} satisfies Meta<typeof StandaloneThreeRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneThreeRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
