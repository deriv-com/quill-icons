import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleInfoSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleInfoSmRegularIcon',
  component: LabelPairedFileCircleInfoSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleInfoSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleInfoSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
