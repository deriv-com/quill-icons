import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEllipsisVerticalXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEllipsisVerticalXlRegularIcon',
  component: LabelPairedEllipsisVerticalXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedEllipsisVerticalXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEllipsisVerticalXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
