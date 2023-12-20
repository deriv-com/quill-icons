import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCircleMinusCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCircleMinusCaptionBoldIcon',
  component: LabelPairedWalletCircleMinusCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedWalletCircleMinusCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCircleMinusCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
