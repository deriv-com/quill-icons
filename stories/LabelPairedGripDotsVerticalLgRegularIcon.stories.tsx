import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedGripDotsVerticalLgRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedGripDotsVerticalLgRegularIcon',
  component: LabelPairedGripDotsVerticalLgRegularIcon,
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
} satisfies Meta<typeof LabelPairedGripDotsVerticalLgRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedGripDotsVerticalLgRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
