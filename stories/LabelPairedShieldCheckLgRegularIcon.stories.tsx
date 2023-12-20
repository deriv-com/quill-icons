import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedShieldCheckLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedShieldCheckLgRegularIcon',
  component: LabelPairedShieldCheckLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedShieldCheckLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedShieldCheckLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
