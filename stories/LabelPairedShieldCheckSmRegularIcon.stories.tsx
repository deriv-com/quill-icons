import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedShieldCheckSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedShieldCheckSmRegularIcon',
  component: LabelPairedShieldCheckSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedShieldCheckSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedShieldCheckSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
