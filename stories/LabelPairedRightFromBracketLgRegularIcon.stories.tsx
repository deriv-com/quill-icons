import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRightFromBracketLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRightFromBracketLgRegularIcon',
  component: LabelPairedRightFromBracketLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedRightFromBracketLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRightFromBracketLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
