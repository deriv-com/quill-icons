import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRightFromBracketSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRightFromBracketSmRegularIcon',
  component: LabelPairedRightFromBracketSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedRightFromBracketSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRightFromBracketSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
