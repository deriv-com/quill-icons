import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCirclePlusLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCirclePlusLgBoldIcon',
  component: LabelPairedCirclePlusLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedCirclePlusLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCirclePlusLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
