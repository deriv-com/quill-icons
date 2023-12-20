import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleExclamationCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleExclamationCaptionBoldIcon',
  component: LabelPairedCircleExclamationCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleExclamationCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleExclamationCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
