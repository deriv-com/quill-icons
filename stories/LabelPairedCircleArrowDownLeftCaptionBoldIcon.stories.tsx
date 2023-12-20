import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowDownLeftCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowDownLeftCaptionBoldIcon',
  component: LabelPairedCircleArrowDownLeftCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowDownLeftCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowDownLeftCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
