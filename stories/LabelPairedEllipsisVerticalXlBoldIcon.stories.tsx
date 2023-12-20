import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEllipsisVerticalXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEllipsisVerticalXlBoldIcon',
  component: LabelPairedEllipsisVerticalXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedEllipsisVerticalXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEllipsisVerticalXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
