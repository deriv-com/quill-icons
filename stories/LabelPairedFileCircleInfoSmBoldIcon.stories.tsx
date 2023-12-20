import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileCircleInfoSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileCircleInfoSmBoldIcon',
  component: LabelPairedFileCircleInfoSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedFileCircleInfoSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileCircleInfoSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
