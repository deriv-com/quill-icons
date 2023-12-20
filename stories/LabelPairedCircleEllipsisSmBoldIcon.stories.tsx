import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleEllipsisSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleEllipsisSmBoldIcon',
  component: LabelPairedCircleEllipsisSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleEllipsisSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleEllipsisSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
