import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedXTwitterXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedXTwitterXlIcon',
  component: LabelPairedXTwitterXlIcon,
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
} satisfies Meta<typeof LabelPairedXTwitterXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedXTwitterXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
