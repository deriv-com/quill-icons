import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowDownRightSmBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowDownRightSmBoldIcon',
  component: LabelPairedCircleArrowDownRightSmBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowDownRightSmBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowDownRightSmBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
