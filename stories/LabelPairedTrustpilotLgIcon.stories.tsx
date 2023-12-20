import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTrustpilotLgIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTrustpilotLgIcon',
  component: LabelPairedTrustpilotLgIcon,
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
} satisfies Meta<typeof LabelPairedTrustpilotLgIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTrustpilotLgIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
