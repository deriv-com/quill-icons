import type { Meta, StoryObj } from '@storybook/react';

import { StandalonePresentationScreenRegularIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandalonePresentationScreenRegularIcon',
  component: StandalonePresentationScreenRegularIcon,
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
} satisfies Meta<typeof StandalonePresentationScreenRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandalonePresentationScreenRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
