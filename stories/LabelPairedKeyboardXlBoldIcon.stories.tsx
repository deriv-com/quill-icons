import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedKeyboardXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedKeyboardXlBoldIcon',
  component: LabelPairedKeyboardXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedKeyboardXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedKeyboardXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
