import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHorizontalRuleDashedLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHorizontalRuleDashedLgRegularIcon',
  component: LabelPairedHorizontalRuleDashedLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedHorizontalRuleDashedLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHorizontalRuleDashedLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
