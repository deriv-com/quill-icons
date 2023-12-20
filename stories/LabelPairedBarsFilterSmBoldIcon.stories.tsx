import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedBarsFilterSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedBarsFilterSmBoldIcon',
  component: LabelPairedBarsFilterSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedBarsFilterSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedBarsFilterSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
