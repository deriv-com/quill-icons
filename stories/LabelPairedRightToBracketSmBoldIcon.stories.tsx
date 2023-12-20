import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRightToBracketSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRightToBracketSmBoldIcon',
  component: LabelPairedRightToBracketSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedRightToBracketSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRightToBracketSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
