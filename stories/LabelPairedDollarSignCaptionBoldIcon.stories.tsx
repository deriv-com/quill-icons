import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedDollarSignCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedDollarSignCaptionBoldIcon',
  component: LabelPairedDollarSignCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedDollarSignCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedDollarSignCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
