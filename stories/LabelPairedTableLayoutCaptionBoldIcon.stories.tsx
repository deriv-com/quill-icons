import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTableLayoutCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTableLayoutCaptionBoldIcon',
  component: LabelPairedTableLayoutCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedTableLayoutCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTableLayoutCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
