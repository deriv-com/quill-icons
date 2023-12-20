import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDealCancellationSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDealCancellationSmRegularIcon',
  component: LabelPairedDealCancellationSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedDealCancellationSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDealCancellationSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
