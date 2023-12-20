import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHorizontalRuleDashedXlBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHorizontalRuleDashedXlBoldIcon',
  component: LabelPairedHorizontalRuleDashedXlBoldIcon,
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
} satisfies Meta<typeof LabelPairedHorizontalRuleDashedXlBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHorizontalRuleDashedXlBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
