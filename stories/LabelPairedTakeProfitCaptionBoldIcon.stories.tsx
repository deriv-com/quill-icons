import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTakeProfitCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTakeProfitCaptionBoldIcon',
  component: LabelPairedTakeProfitCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedTakeProfitCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTakeProfitCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
