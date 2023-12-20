import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronLeftLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronLeftLgBoldIcon',
  component: LabelPairedCircleChevronLeftLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronLeftLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronLeftLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
