import type { Meta, StoryObj } from '@storybook/react';

import { LightSafeAndSecureTestIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightSafeAndSecureTestIcon',
  component: LightSafeAndSecureTestIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightSafeAndSecureTestIcon>;

export default meta;

type Story = StoryObj<typeof LightSafeAndSecureTestIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
