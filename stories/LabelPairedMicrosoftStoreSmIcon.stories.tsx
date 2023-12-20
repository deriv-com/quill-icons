import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrosoftStoreSmIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrosoftStoreSmIcon',
  component: LabelPairedMicrosoftStoreSmIcon,
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
} satisfies Meta<typeof LabelPairedMicrosoftStoreSmIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrosoftStoreSmIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
