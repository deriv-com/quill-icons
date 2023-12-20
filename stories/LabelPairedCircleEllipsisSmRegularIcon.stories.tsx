import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleEllipsisSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleEllipsisSmRegularIcon',
  component: LabelPairedCircleEllipsisSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleEllipsisSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleEllipsisSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
