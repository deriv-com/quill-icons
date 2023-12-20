import type { Meta, StoryObj } from '@storybook/react';

import { LightTwentyFourSevenSupportTestIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightTwentyFourSevenSupportTestIcon',
  component: LightTwentyFourSevenSupportTestIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightTwentyFourSevenSupportTestIcon>;

export default meta;

type Story = StoryObj<typeof LightTwentyFourSevenSupportTestIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
