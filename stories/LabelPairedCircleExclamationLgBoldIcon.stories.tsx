import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleExclamationLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleExclamationLgBoldIcon',
  component: LabelPairedCircleExclamationLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleExclamationLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleExclamationLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
