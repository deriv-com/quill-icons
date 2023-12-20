import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleDotCaptionFillIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleDotCaptionFillIcon',
  component: LabelPairedCircleDotCaptionFillIcon,
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
} satisfies Meta<typeof LabelPairedCircleDotCaptionFillIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleDotCaptionFillIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
