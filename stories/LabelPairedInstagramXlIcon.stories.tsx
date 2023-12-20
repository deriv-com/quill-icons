import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedInstagramXlIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedInstagramXlIcon',
  component: LabelPairedInstagramXlIcon,
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
} satisfies Meta<typeof LabelPairedInstagramXlIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedInstagramXlIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
