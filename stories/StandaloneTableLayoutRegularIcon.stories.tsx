import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneTableLayoutRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneTableLayoutRegularIcon',
  component: StandaloneTableLayoutRegularIcon,
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
} satisfies Meta<typeof StandaloneTableLayoutRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneTableLayoutRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
