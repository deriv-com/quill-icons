import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowLeftLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowLeftLgBoldIcon',
  component: LabelPairedCircleArrowLeftLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowLeftLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowLeftLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
