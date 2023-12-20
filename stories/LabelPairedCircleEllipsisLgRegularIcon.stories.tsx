import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleEllipsisLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleEllipsisLgRegularIcon',
  component: LabelPairedCircleEllipsisLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleEllipsisLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleEllipsisLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
