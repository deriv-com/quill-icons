import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromBracketXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromBracketXlBoldIcon',
  component: LabelPairedArrowUpFromBracketXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromBracketXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromBracketXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
