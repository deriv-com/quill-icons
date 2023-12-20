import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHorizontalRuleDashedLgBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHorizontalRuleDashedLgBoldIcon',
  component: LabelPairedHorizontalRuleDashedLgBoldIcon,
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
} satisfies Meta<typeof LabelPairedHorizontalRuleDashedLgBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHorizontalRuleDashedLgBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
