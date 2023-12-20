import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightUserTieCircleDollarCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightUserTieCircleDollarCaptionBoldIcon',
  component: LabelPairedLightUserTieCircleDollarCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedLightUserTieCircleDollarCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightUserTieCircleDollarCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
