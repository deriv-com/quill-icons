import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowsCaptionIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowsCaptionIcon',
  component: LabelPairedWindowsCaptionIcon,
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
} satisfies Meta<typeof LabelPairedWindowsCaptionIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowsCaptionIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
