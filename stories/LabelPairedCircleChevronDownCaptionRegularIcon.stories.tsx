import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronDownCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronDownCaptionRegularIcon',
  component: LabelPairedCircleChevronDownCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronDownCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronDownCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
