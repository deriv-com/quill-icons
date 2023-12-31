import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneLocationDotRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneLocationDotRegularIcon',
  component: StandaloneLocationDotRegularIcon,
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
} satisfies Meta<typeof StandaloneLocationDotRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneLocationDotRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
