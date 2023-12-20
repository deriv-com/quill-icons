import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedPhoneCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedPhoneCaptionBoldIcon',
  component: LabelPairedPhoneCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedPhoneCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedPhoneCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
