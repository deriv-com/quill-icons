import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLaptopMobileLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLaptopMobileLgBoldIcon',
  component: LabelPairedLaptopMobileLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedLaptopMobileLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLaptopMobileLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
