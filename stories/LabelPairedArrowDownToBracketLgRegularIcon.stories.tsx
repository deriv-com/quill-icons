import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownToBracketLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownToBracketLgRegularIcon',
  component: LabelPairedArrowDownToBracketLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownToBracketLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownToBracketLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
