import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTableLayoutXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTableLayoutXlBoldIcon',
  component: LabelPairedTableLayoutXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedTableLayoutXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTableLayoutXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
