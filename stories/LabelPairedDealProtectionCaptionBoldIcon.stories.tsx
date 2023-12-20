import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDealProtectionCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDealProtectionCaptionBoldIcon',
  component: LabelPairedDealProtectionCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedDealProtectionCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDealProtectionCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
