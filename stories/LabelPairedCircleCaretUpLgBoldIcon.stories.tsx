import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleCaretUpLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleCaretUpLgBoldIcon',
  component: LabelPairedCircleCaretUpLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleCaretUpLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleCaretUpLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
