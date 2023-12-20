import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLaptopLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLaptopLgBoldIcon',
  component: LabelPairedLaptopLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedLaptopLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLaptopLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
