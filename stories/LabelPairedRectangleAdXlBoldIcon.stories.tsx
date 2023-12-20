import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRectangleAdXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRectangleAdXlBoldIcon',
  component: LabelPairedRectangleAdXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedRectangleAdXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRectangleAdXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
