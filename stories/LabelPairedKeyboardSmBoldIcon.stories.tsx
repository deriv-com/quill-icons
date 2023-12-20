import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedKeyboardSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedKeyboardSmBoldIcon',
  component: LabelPairedKeyboardSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedKeyboardSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedKeyboardSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
