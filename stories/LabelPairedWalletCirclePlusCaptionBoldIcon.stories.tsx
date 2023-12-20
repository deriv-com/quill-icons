import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCirclePlusCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCirclePlusCaptionBoldIcon',
  component: LabelPairedWalletCirclePlusCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedWalletCirclePlusCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCirclePlusCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
