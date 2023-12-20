import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromBracketXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromBracketXlRegularIcon',
  component: LabelPairedArrowUpFromBracketXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromBracketXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromBracketXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
