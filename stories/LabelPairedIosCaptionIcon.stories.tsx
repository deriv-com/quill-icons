import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedIosCaptionIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedIosCaptionIcon',
  component: LabelPairedIosCaptionIcon,
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
} satisfies Meta<typeof LabelPairedIosCaptionIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedIosCaptionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
