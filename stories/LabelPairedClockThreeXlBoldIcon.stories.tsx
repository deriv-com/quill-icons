import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedClockThreeXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedClockThreeXlBoldIcon',
  component: LabelPairedClockThreeXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedClockThreeXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedClockThreeXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
