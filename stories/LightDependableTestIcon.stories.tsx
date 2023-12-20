import type { Meta, StoryObj } from '@storybook/react';

import { LightDependableTestIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightDependableTestIcon',
  component: LightDependableTestIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightDependableTestIcon>;

export default meta;

type Story = StoryObj<typeof LightDependableTestIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
