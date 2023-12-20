import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowDownRightCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowDownRightCaptionBoldIcon',
  component: LabelPairedCircleArrowDownRightCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowDownRightCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowDownRightCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
