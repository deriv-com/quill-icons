import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowLeftCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowLeftCaptionBoldIcon',
  component: LabelPairedCircleArrowLeftCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowLeftCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowLeftCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
