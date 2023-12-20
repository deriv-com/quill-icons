import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedComputerMouseScrollwheelLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedComputerMouseScrollwheelLgRegularIcon',
  component: LabelPairedComputerMouseScrollwheelLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedComputerMouseScrollwheelLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedComputerMouseScrollwheelLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
