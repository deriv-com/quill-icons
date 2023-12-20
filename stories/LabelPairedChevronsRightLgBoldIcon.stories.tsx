import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronsRightLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronsRightLgBoldIcon',
  component: LabelPairedChevronsRightLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedChevronsRightLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronsRightLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
