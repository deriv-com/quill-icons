import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBackwardStepXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBackwardStepXlBoldIcon',
  component: LabelPairedBackwardStepXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedBackwardStepXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBackwardStepXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
