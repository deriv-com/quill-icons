import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronDownCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronDownCaptionRegularIcon',
  component: LabelPairedChevronDownCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedChevronDownCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronDownCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
