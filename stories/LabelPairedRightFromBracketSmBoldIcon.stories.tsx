import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRightFromBracketSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRightFromBracketSmBoldIcon',
  component: LabelPairedRightFromBracketSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedRightFromBracketSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRightFromBracketSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
