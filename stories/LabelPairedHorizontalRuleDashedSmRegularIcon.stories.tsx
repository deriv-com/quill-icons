import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHorizontalRuleDashedSmRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHorizontalRuleDashedSmRegularIcon',
  component: LabelPairedHorizontalRuleDashedSmRegularIcon,
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
} satisfies Meta<typeof LabelPairedHorizontalRuleDashedSmRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHorizontalRuleDashedSmRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
