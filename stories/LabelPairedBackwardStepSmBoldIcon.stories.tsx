import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBackwardStepSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBackwardStepSmBoldIcon',
  component: LabelPairedBackwardStepSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedBackwardStepSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBackwardStepSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
