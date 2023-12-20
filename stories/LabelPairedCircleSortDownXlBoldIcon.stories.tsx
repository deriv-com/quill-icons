import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleSortDownXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleSortDownXlBoldIcon',
  component: LabelPairedCircleSortDownXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleSortDownXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleSortDownXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
