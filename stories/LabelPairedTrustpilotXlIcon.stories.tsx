import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTrustpilotXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTrustpilotXlIcon',
  component: LabelPairedTrustpilotXlIcon,
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
} satisfies Meta<typeof LabelPairedTrustpilotXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTrustpilotXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
