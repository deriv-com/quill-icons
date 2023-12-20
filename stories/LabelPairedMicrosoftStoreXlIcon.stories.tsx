import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMicrosoftStoreXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMicrosoftStoreXlIcon',
  component: LabelPairedMicrosoftStoreXlIcon,
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
} satisfies Meta<typeof LabelPairedMicrosoftStoreXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMicrosoftStoreXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
