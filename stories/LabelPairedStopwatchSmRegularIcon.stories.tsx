import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedStopwatchSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedStopwatchSmRegularIcon',
  component: LabelPairedStopwatchSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedStopwatchSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedStopwatchSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
