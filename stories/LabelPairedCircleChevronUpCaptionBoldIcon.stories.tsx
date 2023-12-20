import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronUpCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronUpCaptionBoldIcon',
  component: LabelPairedCircleChevronUpCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronUpCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronUpCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
