import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDealCancellationCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDealCancellationCaptionBoldIcon',
  component: LabelPairedDealCancellationCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedDealCancellationCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDealCancellationCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
