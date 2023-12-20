import type { Meta, StoryObj } from '@storybook/react';

import { LightRegulatedTestIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightRegulatedTestIcon',
  component: LightRegulatedTestIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightRegulatedTestIcon>;

export default meta;

type Story = StoryObj<typeof LightRegulatedTestIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
