import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedComputerMouseScrollwheelSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedComputerMouseScrollwheelSmBoldIcon',
  component: LabelPairedComputerMouseScrollwheelSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedComputerMouseScrollwheelSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedComputerMouseScrollwheelSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
