import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedTableLayoutSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedTableLayoutSmBoldIcon',
  component: LabelPairedTableLayoutSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedTableLayoutSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedTableLayoutSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
