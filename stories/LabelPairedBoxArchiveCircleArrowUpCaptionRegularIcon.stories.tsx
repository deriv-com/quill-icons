import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBoxArchiveCircleArrowUpCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBoxArchiveCircleArrowUpCaptionRegularIcon',
  component: LabelPairedBoxArchiveCircleArrowUpCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedBoxArchiveCircleArrowUpCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBoxArchiveCircleArrowUpCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
