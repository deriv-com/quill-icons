import type { Meta, StoryObj } from '@storybook/react';

import { DarkRegulatedTestIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/DarkRegulatedTestIcon',
  component: DarkRegulatedTestIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DarkRegulatedTestIcon>;

export default meta;

type Story = StoryObj<typeof DarkRegulatedTestIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
