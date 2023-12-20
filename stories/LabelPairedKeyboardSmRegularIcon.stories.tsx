import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedKeyboardSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedKeyboardSmRegularIcon',
  component: LabelPairedKeyboardSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedKeyboardSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedKeyboardSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
