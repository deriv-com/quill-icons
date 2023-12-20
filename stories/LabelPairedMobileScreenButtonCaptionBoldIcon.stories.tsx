import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMobileScreenButtonCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMobileScreenButtonCaptionBoldIcon',
  component: LabelPairedMobileScreenButtonCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedMobileScreenButtonCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMobileScreenButtonCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
