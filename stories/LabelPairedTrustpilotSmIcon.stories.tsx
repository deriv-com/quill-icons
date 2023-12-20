import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTrustpilotSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTrustpilotSmIcon',
  component: LabelPairedTrustpilotSmIcon,
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
} satisfies Meta<typeof LabelPairedTrustpilotSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTrustpilotSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
