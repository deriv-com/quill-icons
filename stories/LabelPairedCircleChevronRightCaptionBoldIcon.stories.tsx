import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronRightCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronRightCaptionBoldIcon',
  component: LabelPairedCircleChevronRightCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronRightCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronRightCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
