import type { Meta, StoryObj } from '@storybook/react';

import { DarkSafeAndSecureTestIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/DarkSafeAndSecureTestIcon',
  component: DarkSafeAndSecureTestIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DarkSafeAndSecureTestIcon>;

export default meta;

type Story = StoryObj<typeof DarkSafeAndSecureTestIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
