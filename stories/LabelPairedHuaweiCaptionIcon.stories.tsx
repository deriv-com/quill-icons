import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHuaweiCaptionIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHuaweiCaptionIcon',
  component: LabelPairedHuaweiCaptionIcon,
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
} satisfies Meta<typeof LabelPairedHuaweiCaptionIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHuaweiCaptionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
