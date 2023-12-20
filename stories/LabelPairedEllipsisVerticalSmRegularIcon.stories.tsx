import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEllipsisVerticalSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEllipsisVerticalSmRegularIcon',
  component: LabelPairedEllipsisVerticalSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedEllipsisVerticalSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEllipsisVerticalSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
