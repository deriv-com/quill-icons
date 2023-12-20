import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleCaretUpCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleCaretUpCaptionBoldIcon',
  component: LabelPairedCircleCaretUpCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleCaretUpCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleCaretUpCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
