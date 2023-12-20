import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownOneNineCaptionBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownOneNineCaptionBoldIcon',
  component: LabelPairedArrowDownOneNineCaptionBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownOneNineCaptionBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownOneNineCaptionBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
