import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleXmarkSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleXmarkSmBoldIcon',
  component: LabelPairedCircleXmarkSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleXmarkSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleXmarkSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
