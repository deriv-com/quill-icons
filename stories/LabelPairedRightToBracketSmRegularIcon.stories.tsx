import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRightToBracketSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRightToBracketSmRegularIcon',
  component: LabelPairedRightToBracketSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedRightToBracketSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRightToBracketSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
