import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleInfoLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleInfoLgRegularIcon',
  component: LabelPairedFileCircleInfoLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleInfoLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleInfoLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
