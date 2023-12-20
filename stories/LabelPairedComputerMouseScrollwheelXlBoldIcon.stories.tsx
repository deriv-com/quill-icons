import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedComputerMouseScrollwheelXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedComputerMouseScrollwheelXlBoldIcon',
  component: LabelPairedComputerMouseScrollwheelXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedComputerMouseScrollwheelXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedComputerMouseScrollwheelXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
