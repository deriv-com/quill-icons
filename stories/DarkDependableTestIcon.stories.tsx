import type { Meta, StoryObj } from '@storybook/react';

import { DarkDependableTestIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/DarkDependableTestIcon',
  component: DarkDependableTestIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DarkDependableTestIcon>;

export default meta;

type Story = StoryObj<typeof DarkDependableTestIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
