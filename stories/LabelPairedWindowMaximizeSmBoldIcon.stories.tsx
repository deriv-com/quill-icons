import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMaximizeSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMaximizeSmBoldIcon',
  component: LabelPairedWindowMaximizeSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedWindowMaximizeSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMaximizeSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
