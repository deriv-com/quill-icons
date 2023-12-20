import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowLeftSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowLeftSmBoldIcon',
  component: LabelPairedCircleArrowLeftSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowLeftSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowLeftSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
