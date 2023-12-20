import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTriangleExclamationXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTriangleExclamationXlBoldIcon',
  component: LabelPairedTriangleExclamationXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedTriangleExclamationXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTriangleExclamationXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
