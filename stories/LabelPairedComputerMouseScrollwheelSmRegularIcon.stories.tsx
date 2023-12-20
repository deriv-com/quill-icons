import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedComputerMouseScrollwheelSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedComputerMouseScrollwheelSmRegularIcon',
  component: LabelPairedComputerMouseScrollwheelSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedComputerMouseScrollwheelSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedComputerMouseScrollwheelSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
