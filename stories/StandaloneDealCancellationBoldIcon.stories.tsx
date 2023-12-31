import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneDealCancellationBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneDealCancellationBoldIcon',
  component: StandaloneDealCancellationBoldIcon,
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
} satisfies Meta<typeof StandaloneDealCancellationBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneDealCancellationBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
