import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRightToBracketLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRightToBracketLgBoldIcon',
  component: LabelPairedRightToBracketLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedRightToBracketLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRightToBracketLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
