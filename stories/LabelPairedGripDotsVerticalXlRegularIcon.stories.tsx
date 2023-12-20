import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGripDotsVerticalXlRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGripDotsVerticalXlRegularIcon',
  component: LabelPairedGripDotsVerticalXlRegularIcon,
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
} satisfies Meta<typeof LabelPairedGripDotsVerticalXlRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGripDotsVerticalXlRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
