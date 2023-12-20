import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronLeftSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronLeftSmBoldIcon',
  component: LabelPairedCircleChevronLeftSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronLeftSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronLeftSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
