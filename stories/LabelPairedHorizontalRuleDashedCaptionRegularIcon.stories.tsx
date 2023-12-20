import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHorizontalRuleDashedCaptionRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHorizontalRuleDashedCaptionRegularIcon',
  component: LabelPairedHorizontalRuleDashedCaptionRegularIcon,
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
} satisfies Meta<typeof LabelPairedHorizontalRuleDashedCaptionRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHorizontalRuleDashedCaptionRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
