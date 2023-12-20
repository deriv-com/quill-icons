import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownToBracketXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownToBracketXlBoldIcon',
  component: LabelPairedArrowDownToBracketXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownToBracketXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownToBracketXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
