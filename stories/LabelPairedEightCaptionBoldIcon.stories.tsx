import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEightCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEightCaptionBoldIcon',
  component: LabelPairedEightCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedEightCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEightCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
