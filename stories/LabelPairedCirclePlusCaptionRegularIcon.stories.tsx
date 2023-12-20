import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCirclePlusCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCirclePlusCaptionRegularIcon',
  component: LabelPairedCirclePlusCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedCirclePlusCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCirclePlusCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
