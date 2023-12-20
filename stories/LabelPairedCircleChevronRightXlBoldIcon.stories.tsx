import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronRightXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronRightXlBoldIcon',
  component: LabelPairedCircleChevronRightXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronRightXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronRightXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
