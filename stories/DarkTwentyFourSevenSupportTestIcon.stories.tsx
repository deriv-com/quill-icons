import type { Meta, StoryObj } from '@storybook/react';

import { DarkTwentyFourSevenSupportTestIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/DarkTwentyFourSevenSupportTestIcon',
  component: DarkTwentyFourSevenSupportTestIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DarkTwentyFourSevenSupportTestIcon>;

export default meta;

type Story = StoryObj<typeof DarkTwentyFourSevenSupportTestIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
