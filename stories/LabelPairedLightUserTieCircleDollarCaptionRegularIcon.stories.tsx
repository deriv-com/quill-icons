import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedLightUserTieCircleDollarCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedLightUserTieCircleDollarCaptionRegularIcon',
  component: LabelPairedLightUserTieCircleDollarCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedLightUserTieCircleDollarCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedLightUserTieCircleDollarCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
